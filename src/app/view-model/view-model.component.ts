import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from '../models/workspace';
import { mxGraphModel, mxGraph, mxEventObject, mxCell } from 'mxgraph';
import mx from '../mxgraph-support/mxgraph';
import { ZeroTrustService } from '../services/zero-trust.service';
import { WebsocketManagerService } from '../services/websocket-manager.service';
@Component({
  selector: 'app-view-model',
  templateUrl: './view-model.component.html',
  styleUrls: ['./view-model.component.scss'],
  providers: [WebsocketManagerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewModelComponent implements OnInit, OnDestroy, AfterViewInit {


  @ViewChild('graph') graphContainer: ElementRef;
  @ViewChild('toolbar') toolbarContainer: ElementRef;
  editorInitScript = '../../assets/js/graphEditorInit.js'
  spinForProject: boolean;
  spinForProjectSummary: boolean;
  projectID = '';
  project: Project;
  project$: Subscription;
  graph: mxGraph;

  constructor(private router: Router, private zt: ZeroTrustService,
    private wsManager: WebsocketManagerService, private renderer: Renderer2) { }

  ngOnInit(): void { }


  ngAfterViewInit() {
    const path = this.router.url;
    if (path) {
      //get project ID from the route
      const subPaths = path.split('/')
      const projectID = subPaths[subPaths.length - 1]
      this.projectID = projectID
      this.refreshProject(projectID)
      this.wsManager.connectMessageSocket(projectID)
      this.setupGraph2()
      this.wsManager.sendMessage({
        type: 'get_model',
        projectID: projectID,
      })
    }
  }


  setupGraph2() {

    const s = this.renderer.createElement('script')
    s.type = 'text/javascript';
    s.src = this.editorInitScript
    this.renderer.appendChild(this.graphContainer.nativeElement, s)
  }

  @HostListener('window:zt.graph', ['$event'])
  instrumentGraph(event) {
    console.log('Got event', event);

    this.graph = event.detail
    // this.createToolBar(this.graph)
    this.addGraphEventListeners()
    this.subscribeToGraphUpdates()
  }


  refreshProject(projectID: string) {
    this.spinForProject = true;
    this.spinForProjectSummary = true;
    this.project$ = this.zt.getProject(projectID).subscribe(proj => {
      this.setProject(proj);
      this.spinForProject = false;
    });
  }

  setProject(proj: Project) {
    if (!proj || proj.id === '') {
      return;
    }
    // console.log(proj);
    this.project = proj;
  }

  setupGraph() {
    this.graph = new mx.mxGraph(this.graphContainer.nativeElement);
    window['mxGraphModel'] = mx.mxGraphModel;
    window['mxGeometry'] = mx.mxGeometry;
    this.graph.setResizeContainer(true)
    this.graph.setPanning(true)
    this.graph.setAutoSizeCells(true)
    this.graph.setRecursiveResize(true)
    this.graph.setDropEnabled(true)
    this.graph.setConnectable(true)
    this.graph.setTooltips(true)
    this.graph.setBorder(450) //arbitrary, covers screen

    const keyHandler = new mx.mxKeyHandler(this.graph)
    keyHandler.bindKey(8/*BACKSPACE*/, (_evt) => {
      const cell = this.graph.getSelectionCell()
      if (cell) {
        this.graph.getModel().beginUpdate();
        try {
          this.graph.getModel().remove(cell)
        } finally {
          this.graph.getModel().endUpdate()
        }
      }
    })

    this.addGraphEventListeners()
    this.subscribeToGraphUpdates()

  }


  subscribeToGraphUpdates() {
    this.wsManager.messageStream$.subscribe({
      next: msg => {
        console.log('inbound message', msg);
        if (msg.type !== 'update_ui') {
          return
        }
        let model = '<root></root>'
        if (msg.visualModel !== '') {
          model = msg.visualModel
        }
        this.graph.getModel().beginUpdate();
        try {
          const parent = this.graph.getDefaultParent()
          this.graph.selectAll(parent)
          this.graph.clearSelection()
          const doc = mx.mxUtils.parseXml(model)
          const codec = new mx.mxCodec(doc)
          let el = doc.documentElement.firstChild
          let cells: mxCell[] = []
          while (el != null) {
            let cell = codec.decodeCell(el)
            if (cell != null && cell.id != undefined && cell.parent != undefined && cell.id != cell.parent.id) {
              el = el.nextSibling
              continue
            }
            cells.push(cell)
            el = el.nextSibling
          }
          this.graph.addCells(cells)
        } finally {
          this.graph.getModel().endUpdate();

        }
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        // console.log('done');
      }

    })
  }

  addGraphEventListeners() {
    this.graph.getModel().addListener("change", (model: mxGraphModel, evt) => {
      // console.log('changelistener - model, evt ', model, evt);
      const codec = new mx.mxCodec()
      const doc = codec.encode(model)
      // console.log('change-listener - doc', doc);
      const xml = mx.mxUtils.getXml(doc)
      // console.log('changelistener - Parsed xml', xml);
      this.wsManager.sendMessage({
        projectID: this.project.id,
        type: 'update_model',
        visualModel: xml
      })
    })

    mx.mxEvent.addMouseWheelListener((evt: WheelEvent, up: boolean) => {
      if (evt.ctrlKey && up) {
        this.graph.zoomIn()
        mx.mxEvent.consume(evt)
      } else if (evt.ctrlKey) {
        this.graph.zoomOut()
        mx.mxEvent.consume(evt)
      }
    })


    this.graph.addListener(mx.mxEvent.CLICK, (_sender: any, evt: mxEventObject) => {
      const cell = evt.getProperty("cell") as mxCell
      if (cell != null) {
        console.log('clicked cell with id', cell.id);
        evt.consume()
      }
    })

  }

  ngOnDestroy(): void {
    if (this.project$) {
      this.project$.unsubscribe();
    }

  }

  createToolBar(graph) {
    const tb = this.toolbarContainer.nativeElement
    // tb.className = "bg-blue-50"
    this.renderer.addClass(tb, 'bg-red-100')
    const toolbar = new mx.mxToolbar(tb)
    this.addVertex(graph, toolbar, 'assets/editors/images/swimlane.gif', 120, 160, 'shape=swimlane;startSize=20;');
    this.addVertex(graph, toolbar, 'assets/editors/images/rectangle.gif', 100, 40, '');
    this.addVertex(graph, toolbar, 'assets/editors/images/rounded.gif', 100, 40, 'shape=rounded;green-500');
    this.addVertex(graph, toolbar, 'assets/editors/images/ellipse.gif', 40, 40, 'shape=ellipse');
    this.addVertex(graph, toolbar, 'assets/editors/images/cylinder.gif', 40, 40, 'shape=cylinder');
    this.addVertex(graph, toolbar, 'assets/editors/images/actor.gif', 30, 40, 'shape=actor');
    toolbar.addLine();
  }

  addVertex(graph, toolbar, icon, w, h, style) {
    const vertex = new mx.mxCell(null, new mx.mxGeometry(0, 0, w, h), style);
    vertex.setVertex(true);
    this.addToolbarItem(graph, toolbar, vertex, icon);
  }

  addToolbarItem(graph, toolbar, prototype, image) {
    // Function that is executed when the image is dropped on
    // the graph. The cell argument points to the cell under
    // the mousepointer if there is one.
    var funct = function (graph, evt, cell) {
      graph.stopEditing(false);
      var pt = graph.getPointForEvent(evt);
      var vertex = graph.getModel().cloneCell(prototype);
      vertex.geometry.x = pt.x;
      vertex.geometry.y = pt.y;
      graph.setSelectionCells(graph.importCells([vertex], 0, 0, cell));
    }

    // Creates the image which is used as the drag icon (preview)
    var img = toolbar.addMode(null, image, funct);
    mx.mxUtils.makeDraggable(img, graph, funct);
  }
}
