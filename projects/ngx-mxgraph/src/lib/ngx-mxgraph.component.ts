import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { mxCell, mxEvent, mxEventObject } from "mxgraph";
import mx from './mxgraph-support/mxgraph';

@Component({
  selector: 'lib-ngx-mxgraph',
  template: `
  <div class="flex w-max h-max min-w-full min-h-full">
    <div #toolbar class="w-10 max-h-fit bg-blue-50"></div>
    <div #graph class="p-2 grow"></div>
  </div>
  `,
  styles: [
  ]
})
export class NgxMxgraphComponent implements OnInit, AfterViewInit {

  @ViewChild('graph') graphContainer: ElementRef;
  @ViewChild('toolbar') toolbarContainer: ElementRef;
  constructor() { }


  ngAfterViewInit(): void {

    const graph = new mx.mxGraph(this.graphContainer.nativeElement);
    window['mxGraphModel'] = mx.mxGraphModel;
    window['mxGeometry'] = mx.mxGeometry;
    graph.setResizeContainer(true)
    graph.setPanning(true)
    graph.setAutoSizeCells(true)
    graph.setRecursiveResize(true)
    graph.setDropEnabled(true)
    graph.setConnectableEdges(true)
    graph.setTooltips(true)
    graph.setBorder(450) //arbitrary, covers screen

    const keyHandler = new mx.mxKeyHandler(graph)
    keyHandler.bindKey(8/*BACKSPACE*/, (evt) => {
      console.log('backspace called');
      const cell = graph.getSelectionCell()
      console.log('selected cell', cell);
      if (cell) {
        console.log("Value of selected cell:", cell.value);

        graph.getModel().beginUpdate();
        try {
          graph.getModel().remove(cell)

        } finally {
          graph.getModel().endUpdate()
        }
      }

    })

    this.createToolBar(graph)

    mx.mxEvent.addMouseWheelListener((evt: WheelEvent, up: boolean) => {
      if (evt.ctrlKey && up) {
        graph.zoomIn()
        mx.mxEvent.consume(evt)
      } else if (evt.ctrlKey) {
        graph.zoomOut()
        mx.mxEvent.consume(evt)
      }
    })


    graph.addListener(mx.mxEvent.CLICK, (sender: any, evt: mxEventObject) => {
      const cell = evt.getProperty("cell") as mxCell
      if (cell != null) {
        console.log('clicked cell with id', cell.id);
        evt.consume()

      }
    })





    graph.getModel().beginUpdate();

    try {
      const doc = mx.mxUtils.parseXml(this.xml)
      const parent = graph.getDefaultParent();

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


      graph.addCells(cells)


    } finally {
      graph.getModel().endUpdate();


    }

  }

  ngOnInit(): void {
  }

  xml = `<root>
  <mxCell id="5" value="xxx" vertex="1">
   <mxGeometry x="10" y="10" width="120" height="70" as="geometry"/>
  </mxCell>
  <mxCell id="2" value="Hello," vertex="1" parent="5">
   <mxGeometry x="20" y="20" width="80" height="30" as="geometry"/>
  </mxCell>
  <mxCell id="3" value="World!" vertex="1">
   <mxGeometry x="200" y="150" width="80" height="30" as="geometry"/>
  </mxCell>
  <mxCell id="4" value="" style="edgeStyle=orthogonalEdgeStyle;curved=1;orthogonalLoop=1;jettySize=auto;html=1" edge="1" source="2" target="3">
   <mxGeometry relative="1" as="geometry"/>
  </mxCell>
  <mxCell id="6" value="" style="edgeStyle=orthogonalEdgeStyle;curved=1;orthogonalLoop=1;jettySize=auto;html=1" edge="1" source="3" target="2">
   <mxGeometry relative="1" as="geometry"/>
  </mxCell>
  </root>`;



  createToolBar(graph) {
    const tb = this.toolbarContainer.nativeElement
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
