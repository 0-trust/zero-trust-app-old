import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ZeroTrustService } from '../services/zero-trust.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {


  // graph: Graphviz<any, any, any, any>;
  @ViewChild('graph') graphContainer: ElementRef;
  constructor(private zt: ZeroTrustService) { }

  ngOnInit(): void {


    // this.graph = graphviz('#graph')
    //   .options({
    //     fit: true,
    //     engine: 'dot',
    //   })
    //   .renderDot(`



    //       digraph G {
    //         /* rankdir=LR; */
    //         /* Containers/Zones */


    //         subgraph cluster_extra_private {
    //                 label="Extra Private"
    //                 bgcolor=lightskyblue


    //         }



    //         subgraph cluster_internet {
    //                 label="Internet"
    //                 bgcolor=lightskyblue


    //                         web_service[label="Web Service"]

    //         }



    //         subgraph cluster_private {
    //                 label="Private"
    //                 bgcolor=lightskyblue


    //         subgraph cluster_super_private {
    //                 label="Super Private"
    //                 bgcolor=lightskyblue


    //         subgraph cluster_extra_private {
    //                 label="Extra Private"
    //                 bgcolor=lightskyblue


    //         }



    //                         class_customerdatabase[label="Class CustomerDatabase"]

    //         }



    //                         customer_database[label="Customer Database"]

    //         }



    //         subgraph cluster_super_private {
    //                 label="Super Private"
    //                 bgcolor=lightskyblue


    //         subgraph cluster_extra_private {
    //                 label="Extra Private"
    //                 bgcolor=lightskyblue


    //         }



    //                         class_customerdatabase[label="Class CustomerDatabase"]

    //         }


    //         /* Flows */

    //                 web_service -> customer_database
    //                  customer_database -> web_service

    //          /* Entities */
    //          X [label="X", shape="square"]

    //          /* Relationships */
    //          G -> X[label=".63"]
    //          a -> b
    //          b -> e [label="ssh"]
    //          e -> a
    //          q -> d
    //          j -> t
    //          subgraph cluster_zone {
    //                  label="zone"
    //                  bgcolor=lightskyblue

    //           b e[shape=circle]
    //          }

    //          /* Ranks */
    //          { rank=same; X; };
    //  }

    //  `).on('end', this.interactivity);

  }

  ngAfterViewInit() {

    // const graph = new mx.mxGraph(this.graphContainer.nativeElement);
    // window['mxGraphModel'] = mx.mxGraphModel;
    // window['mxGeometry'] = mx.mxGeometry;
    // graph.getModel().beginUpdate();

    // try {
    //   const doc = mx.mxUtils.parseXml(this.xml)
    //   const parent = graph.getDefaultParent();

    //   const codec = new mx.mxCodec(doc)
    //   // codec.decode(doc.documentElement, graph.getModel())
    //   let el = doc.documentElement.firstChild
    //   let cells: mxCell[] = []
    //   while (el != null) {
    //     // console.log(el);
    //     let cell = codec.decodeCell(el)
    //     // cell.setParent(parent)
    //     // console.log(cell);

    //     if (cell != null && cell.id != undefined && cell.parent != undefined && cell.id != cell.parent.id) {
    //       el = el.nextSibling
    //       continue
    //     }
    //     cells.push(cell)
    //     el = el.nextSibling

    //   }


    //   graph.addCells(cells)

    //   // const vertex1 = graph.insertVertex(parent, '1', 'Vertex 1', 0, 0, 200, 80);
    //   // const vertex2 = graph.insertVertex(parent, '2', 'Vertex 2', 0, 0, 200, 80); graph.insertEdge(parent, '', '', vertex1, vertex2);
    // } finally {
    //   graph.getModel().endUpdate();
    //   // new mx.mxGraphLayout(graph).execute(graph.getDefaultParent());
    //   // new mx.mxHierarchicalLayout(graph).execute(graph.getDefaultParent());

    // }
  }

  interactivity() {
    console.log('interactivity called');
    // d3.
  }

  xml2 = '<root><mxCell id="2" value="Hello," vertex="1"><mxGeometry x="20" y="20" width="80" height="30" as="geometry"/></mxCell><mxCell id="3" value="World!" vertex="1"><mxGeometry x="200" y="150" width="80" height="30" as="geometry"/></mxCell><mxCell id="4" value="" edge="1" source="2" target="3"><mxGeometry relative="1" as="geometry"/></mxCell></root>';



  xml = ` <root>
  <mxCell id="7ZAuyyWEkKCXNhUEa2Ve-0" />
  <mxCell id="7ZAuyyWEkKCXNhUEa2Ve-1" parent="7ZAuyyWEkKCXNhUEa2Ve-0" />
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-10" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=1;entryDx=0;entryDy=0;fontColor=#000000;startArrow=classic;startFill=1;strokeColor=#00CC00;exitX=0.13;exitY=0.77;exitDx=0;exitDy=0;exitPerimeter=0;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="1wJCmiXCzcZoRwwKPZ_C-1" target="G_Lm-U83OFBGjxTVm_0d-9" edge="1">
    <mxGeometry relative="1" as="geometry">
      <Array as="points">
        <mxPoint x="604" y="1045" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-11" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.96;exitY=0.7;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0;entryY=1;entryDx=0;entryDy=0;fontColor=#000000;startArrow=classic;startFill=1;strokeColor=#00CC00;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="1wJCmiXCzcZoRwwKPZ_C-1" target="G_Lm-U83OFBGjxTVm_0d-8" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-22" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.16;exitY=0.55;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.004;entryY=0.909;entryDx=0;entryDy=0;entryPerimeter=0;fontColor=#FFFFFF;startArrow=classic;startFill=1;strokeColor=#00CC00;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="1wJCmiXCzcZoRwwKPZ_C-1" target="G_Lm-U83OFBGjxTVm_0d-17" edge="1">
    <mxGeometry relative="1" as="geometry">
      <Array as="points">
        <mxPoint x="196" y="1006" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="1wJCmiXCzcZoRwwKPZ_C-1" value="" style="ellipse;shape=cloud;whiteSpace=wrap;html=1;strokeColor=#FFC200;fillColor=#FFC200;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="745" y="909" width="250" height="177" as="geometry" />
  </mxCell>
  <mxCell id="RY_pe5TGwjVtgM5VuJjG-22" value="Grid Trust Zones" style="swimlane;shadow=0;glass=0;sketch=0;strokeColor=#4D4D4D;strokeWidth=1;gradientColor=none;fontColor=#FFFFFF;fillColor=#00CC00;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="208" y="-12" width="802" height="866" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-47" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.459;entryY=0.002;entryDx=0;entryDy=0;entryPerimeter=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" source="RY_pe5TGwjVtgM5VuJjG-23" target="GWHm9WMeJzEjBmVMQvOX-41" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-48" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;startArrow=classic;startFill=1;strokeColor=#00CC00;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" source="RY_pe5TGwjVtgM5VuJjG-23" target="RY_pe5TGwjVtgM5VuJjG-24" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-103" style="edgeStyle=orthogonalEdgeStyle;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.613;entryY=0;entryDx=0;entryDy=0;entryPerimeter=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;rounded=1;" parent="RY_pe5TGwjVtgM5VuJjG-22" target="RY_pe5TGwjVtgM5VuJjG-25" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="316.64" y="215" as="sourcePoint" />
      <Array as="points">
        <mxPoint x="264.64" y="215" />
        <mxPoint x="264.64" y="255" />
        <mxPoint x="144.64" y="255" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-104" style="edgeStyle=orthogonalEdgeStyle;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.75;exitDx=0;exitDy=0;entryX=0.25;entryY=0;entryDx=0;entryDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;rounded=1;" parent="RY_pe5TGwjVtgM5VuJjG-22" source="RY_pe5TGwjVtgM5VuJjG-23" target="RY_pe5TGwjVtgM5VuJjG-27" edge="1">
    <mxGeometry relative="1" as="geometry">
      <Array as="points">
        <mxPoint x="514.64" y="198" />
        <mxPoint x="514.64" y="285" />
        <mxPoint x="607.64" y="285" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="RY_pe5TGwjVtgM5VuJjG-23" value="Management Zone" style="swimlane;shadow=0;glass=0;sketch=0;strokeWidth=1;gradientColor=none;strokeColor=#00CC00;fontColor=#FFFFFF;fillColor=#00CC00;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="316.27" y="55" width="156.73" height="190" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-14" value="Puppet" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-23" vertex="1">
    <mxGeometry x="31.03000000000002" y="29.5" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-16" value="Config" style="pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.config_assessment;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-23" vertex="1">
    <mxGeometry x="98.5" y="34.5" width="50" height="45" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-111" value="OOB/ILO/IPMI&lt;br&gt;Networks" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=l2_modular;fillColor=#FAFAFA;strokeColor=#005073;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-23" vertex="1">
    <mxGeometry x="29.37" y="107" width="30.82" height="45" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-114" value="LDAP/Zync" style="points=[[0.5,0,0],[0.765,0.48,0],[0.99,0.98,0],[0.5,1,0],[0.01,0.98,0],[0.235,0.48,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.ldap;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-23" vertex="1">
    <mxGeometry x="101.73" y="115" width="43.53" height="37" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-112" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.75;exitDx=0;exitDy=0;entryX=0.25;entryY=0;entryDx=0;entryDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" source="RY_pe5TGwjVtgM5VuJjG-24" target="GWHm9WMeJzEjBmVMQvOX-41" edge="1">
    <mxGeometry relative="1" as="geometry">
      <Array as="points">
        <mxPoint x="301" y="198" />
        <mxPoint x="301" y="272" />
        <mxPoint x="364" y="272" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="RY_pe5TGwjVtgM5VuJjG-24" value="Secrets Zone" style="swimlane;shadow=0;glass=0;sketch=0;strokeWidth=1;gradientColor=none;fillColor=#00CC00;strokeColor=#00CC00;fontColor=#FFFFFF;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="53" y="55" width="150" height="190" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-12" value="Secret Management&lt;br&gt;System" style="outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#277116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.vault;shadow=0;glass=0;sketch=0;" parent="RY_pe5TGwjVtgM5VuJjG-24" vertex="1">
    <mxGeometry x="56.52" y="67.5" width="36.96" height="46.5" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-46" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;strokeColor=#00CC00;fontColor=#000000;startArrow=classic;startFill=1;" parent="RY_pe5TGwjVtgM5VuJjG-22" source="RY_pe5TGwjVtgM5VuJjG-25" target="RY_pe5TGwjVtgM5VuJjG-24" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="RY_pe5TGwjVtgM5VuJjG-25" value="Production Zone" style="swimlane;shadow=0;glass=0;sketch=0;strokeWidth=1;gradientColor=none;strokeColor=#00CC00;fillColor=#00CC00;fontColor=#FFFFFF;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="54.64" y="375" width="146.73" height="210" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-17" value="Storage" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-25" vertex="1">
    <mxGeometry x="26.730000000000018" y="45" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-20" value="DBs" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-25" vertex="1">
    <mxGeometry x="26.730000000000018" y="130" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-19" value="MTA" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-25" vertex="1">
    <mxGeometry x="86.73000000000002" y="130" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-18" value="API" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-25" vertex="1">
    <mxGeometry x="86.73000000000002" y="45" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-8" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;strokeColor=#00CC00;" parent="RY_pe5TGwjVtgM5VuJjG-22" target="RY_pe5TGwjVtgM5VuJjG-25" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="306" y="750" as="sourcePoint" />
    </mxGeometry>
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-28" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=1;entryDx=0;entryDy=0;fontColor=#000000;strokeColor=#00CC00;" parent="RY_pe5TGwjVtgM5VuJjG-22" target="RY_pe5TGwjVtgM5VuJjG-27" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="496" y="750" as="sourcePoint" />
    </mxGeometry>
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-55" style="edgeStyle=orthogonalEdgeStyle;curved=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" target="GWHm9WMeJzEjBmVMQvOX-41" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="401" y="655" as="sourcePoint" />
    </mxGeometry>
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-0" value="Engineering Zone (VPN)" style="swimlane;fontColor=#ffffff;strokeColor=#00CC00;fillColor=#00CC00;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="306" y="647" width="190" height="190" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-9" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;labelBackgroundColor=none;fontColor=#000000;fillColor=#00CC00;strokeColor=#00CC00;" parent="GWHm9WMeJzEjBmVMQvOX-0" vertex="1">
    <mxGeometry x="71.75" y="88" width="36.61" height="36.61" as="geometry" />
  </mxCell>
  <mxCell id="RY_pe5TGwjVtgM5VuJjG-27" value="Dev/QA/STG/LT Zones" style="swimlane;shadow=0;glass=0;sketch=0;strokeWidth=1;gradientColor=none;strokeColor=#FFC200;fillColor=#FFC200;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="564.64" y="380" width="170" height="200" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-23" value="" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-27" vertex="1">
    <mxGeometry x="41.25" y="45" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-24" value="" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-27" vertex="1">
    <mxGeometry x="41.25" y="125" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-25" value="" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-27" vertex="1">
    <mxGeometry x="101.25" y="125" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-26" value="" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-27" vertex="1">
    <mxGeometry x="101.25" y="45" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-50" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" source="GWHm9WMeJzEjBmVMQvOX-36" target="RY_pe5TGwjVtgM5VuJjG-23" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-51" style="edgeStyle=orthogonalEdgeStyle;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.703;entryY=-0.014;entryDx=0;entryDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;entryPerimeter=0;rounded=1;" parent="RY_pe5TGwjVtgM5VuJjG-22" target="RY_pe5TGwjVtgM5VuJjG-25" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="554.64" y="215" as="sourcePoint" />
      <Array as="points">
        <mxPoint x="494.64" y="215" />
        <mxPoint x="494.64" y="290" />
        <mxPoint x="157.64" y="290" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-52" style="edgeStyle=orthogonalEdgeStyle;curved=1;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="594.64" y="245" as="sourcePoint" />
      <mxPoint x="474" y="410" as="targetPoint" />
      <Array as="points">
        <mxPoint x="554.64" y="245" />
        <mxPoint x="554.64" y="410" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-54" style="edgeStyle=orthogonalEdgeStyle;curved=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" source="GWHm9WMeJzEjBmVMQvOX-36" target="RY_pe5TGwjVtgM5VuJjG-27" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-36" value="Admin Zone (VPN)" style="swimlane;fontColor=#ffffff;strokeColor=#00CC00;fillColor=#00CC00;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="554.64" y="55" width="190" height="190" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-6" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;labelBackgroundColor=none;fontColor=#000000;fillColor=#00CC00;strokeColor=#00CC00;" parent="GWHm9WMeJzEjBmVMQvOX-36" vertex="1">
    <mxGeometry x="76.7" y="76.69" width="36.61" height="36.61" as="geometry" />
  </mxCell>
  <mxCell id="Dvfougpp_ovMSUcrZ1fn-0" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;startArrow=none;startFill=0;fontColor=#000000;strokeColor=#00CC00;" parent="RY_pe5TGwjVtgM5VuJjG-22" source="GWHm9WMeJzEjBmVMQvOX-41" target="RY_pe5TGwjVtgM5VuJjG-27" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="Dvfougpp_ovMSUcrZ1fn-1" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" source="GWHm9WMeJzEjBmVMQvOX-41" target="RY_pe5TGwjVtgM5VuJjG-25" edge="1">
    <mxGeometry relative="1" as="geometry">
      <Array as="points">
        <mxPoint x="265" y="450" />
        <mxPoint x="265" y="480" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-41" value="Build Zone" style="swimlane;shadow=0;glass=0;sketch=0;strokeWidth=1;gradientColor=none;strokeColor=#00CC00;fillColor=#00CC00;fontColor=#FFFFFF;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="327.63" y="345" width="147.37" height="210" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-42" value="GitLab" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="GWHm9WMeJzEjBmVMQvOX-41" vertex="1">
    <mxGeometry x="26.730000000000018" y="50" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-43" value="Nexus" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="GWHm9WMeJzEjBmVMQvOX-41" vertex="1">
    <mxGeometry x="26.730000000000018" y="130" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-44" value="SVN" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="GWHm9WMeJzEjBmVMQvOX-41" vertex="1">
    <mxGeometry x="86.73000000000002" y="130" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-45" value="Jenkins" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="GWHm9WMeJzEjBmVMQvOX-41" vertex="1">
    <mxGeometry x="86.73000000000002" y="50" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-89" value="2FA&lt;br&gt;(YubiKey)" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.multi_factor_authentication;pointerEvents=1;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="491" y="113" width="20" height="30" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-100" value="2FA&lt;br&gt;(YubiKey)" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.multi_factor_authentication;pointerEvents=1;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="376" y="561" width="20" height="30" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-99" value="2FA&lt;br&gt;(YubiKey)" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.multi_factor_authentication;pointerEvents=1;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="103.00000000000001" y="595" width="20" height="30" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-98" value="2FA&lt;br&gt;(YubiKey)" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.multi_factor_authentication;pointerEvents=1;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="658" y="595" width="20" height="30" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-97" value="2FA&lt;br&gt;(YubiKey)" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.multi_factor_authentication;pointerEvents=1;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="666" y="304" width="20" height="30" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-91" value="2FA&lt;br&gt;(YubiKey)" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.multi_factor_authentication;pointerEvents=1;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="501" y="372" width="20" height="30" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-90" value="2FA&lt;br&gt;(YubiKey)" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.multi_factor_authentication;pointerEvents=1;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="170" y="293" width="20" height="30" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-105" value="" style="outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C7131F;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.data_encryption_key;shadow=0;glass=0;sketch=0;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="107" y="333" width="19.08" height="24" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-108" value="" style="outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C7131F;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.data_encryption_key;shadow=0;glass=0;sketch=0;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="344" y="304" width="19.08" height="24" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-110" value="" style="outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C7131F;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.data_encryption_key;shadow=0;glass=0;sketch=0;" parent="RY_pe5TGwjVtgM5VuJjG-22" vertex="1">
    <mxGeometry x="278" y="123" width="19.08" height="24" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-0" value="Corporate Trust Zones" style="swimlane;shadow=0;glass=0;sketch=0;strokeWidth=1;gradientColor=none;fillColor=#FFC200;strokeColor=#FFC200;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="1261" y="-12" width="802" height="866" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.459;entryY=0.002;entryDx=0;entryDy=0;entryPerimeter=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-0" source="2mBKKS4B85jo0T16Rx_9-5" target="2mBKKS4B85jo0T16Rx_9-43" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-0" source="2mBKKS4B85jo0T16Rx_9-5" target="2mBKKS4B85jo0T16Rx_9-11" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-3" style="edgeStyle=orthogonalEdgeStyle;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.613;entryY=0;entryDx=0;entryDy=0;entryPerimeter=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;rounded=1;" parent="2mBKKS4B85jo0T16Rx_9-0" target="2mBKKS4B85jo0T16Rx_9-14" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="316.64" y="215" as="sourcePoint" />
      <Array as="points">
        <mxPoint x="264.64" y="215" />
        <mxPoint x="264.64" y="255" />
        <mxPoint x="144.64" y="255" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-5" value="Management Zone" style="swimlane;shadow=0;glass=0;sketch=0;strokeWidth=1;gradientColor=none;strokeColor=#00CC00;fillColor=#00CC00;fontColor=#FFFFFF;" parent="2mBKKS4B85jo0T16Rx_9-0" vertex="1">
    <mxGeometry x="316.27" y="55" width="156.73" height="190" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-7" value="JAMF" style="pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.config_assessment;glass=0;sketch=0;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-5" vertex="1">
    <mxGeometry x="90.73" y="40" width="50" height="45" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-8" value="SCCM" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=l2_modular;fillColor=#FAFAFA;strokeColor=#005073;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-5" vertex="1">
    <mxGeometry x="16.73" y="111" width="30.82" height="45" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-60" value="Active Directory" style="verticalLabelPosition=bottom;html=1;fillColor=#A153A0;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0,0.5,0],[0.125,0.25,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[0.875,0.25,0],[1,0.5,0],[0.875,0.75,0],[0.75,1,0],[0.5,1,0],[0.125,0.75,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=mxgraph.cisco_safe.design.blank_device;resIcon=mxgraph.cisco_safe.design.ms_active_directory_2;" parent="2mBKKS4B85jo0T16Rx_9-5" vertex="1">
    <mxGeometry x="86.73000000000002" y="111" width="50" height="45" as="geometry" />
  </mxCell>
  <mxCell id="MGKo9jBNVaTrBMz4-vka-0" value="Azure AD" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_active_directory;" parent="2mBKKS4B85jo0T16Rx_9-5" vertex="1">
    <mxGeometry x="8.390000000000018" y="35" width="47.5" height="50" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-11" value="Production Zone" style="swimlane;shadow=0;glass=0;sketch=0;strokeWidth=1;gradientColor=none;fillColor=#FFC200;strokeColor=#FFC200;" parent="2mBKKS4B85jo0T16Rx_9-0" vertex="1">
    <mxGeometry x="53" y="55" width="150" height="190" as="geometry" />
  </mxCell>
  <mxCell id="pMUJ_0llIpgrzA8LU3mH-0" value="File Servers" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-11" vertex="1">
    <mxGeometry x="31.25999999999999" y="29.5" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="pMUJ_0llIpgrzA8LU3mH-1" value="DBs" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-11" vertex="1">
    <mxGeometry x="31.25999999999999" y="114.5" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="pMUJ_0llIpgrzA8LU3mH-2" value="Servers" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-11" vertex="1">
    <mxGeometry x="91.25999999999999" y="114.5" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="pMUJ_0llIpgrzA8LU3mH-3" value="VMs" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-11" vertex="1">
    <mxGeometry x="91.25999999999999" y="29.5" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-14" value="Printers/Audio-Visuals" style="swimlane;shadow=0;glass=0;sketch=0;strokeWidth=1;gradientColor=none;fillColor=#FFC200;strokeColor=#FFC200;" parent="2mBKKS4B85jo0T16Rx_9-0" vertex="1">
    <mxGeometry x="51.64" y="380" width="151.3599999999999" height="210" as="geometry" />
  </mxCell>
  <mxCell id="pMUJ_0llIpgrzA8LU3mH-4" value="" style="image;html=1;image=img/lib/clip_art/computers/Printer_Commercial_128x128.png;fontColor=#FFFFFF;strokeColor=#FF0000;fillColor=#FF0000;" parent="2mBKKS4B85jo0T16Rx_9-14" vertex="1">
    <mxGeometry x="14.36" y="40" width="49.64" height="56" as="geometry" />
  </mxCell>
  <mxCell id="pMUJ_0llIpgrzA8LU3mH-5" value="" style="image;html=1;image=img/lib/clip_art/networking/Ip_Camera_128x128.png;fontColor=#FFFFFF;strokeColor=#FF0000;fillColor=#FF0000;" parent="2mBKKS4B85jo0T16Rx_9-14" vertex="1">
    <mxGeometry x="94.36" y="40" width="38.64" height="45" as="geometry" />
  </mxCell>
  <mxCell id="pMUJ_0llIpgrzA8LU3mH-6" value="" style="pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.tv;fontColor=#FFFFFF;" parent="2mBKKS4B85jo0T16Rx_9-14" vertex="1">
    <mxGeometry x="37.36" y="119" width="74.64" height="54" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-19" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=1;entryDx=0;entryDy=0;strokeColor=#00CC00;" parent="2mBKKS4B85jo0T16Rx_9-0" target="2mBKKS4B85jo0T16Rx_9-14" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="306" y="697" as="sourcePoint" />
    </mxGeometry>
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-21" style="edgeStyle=orthogonalEdgeStyle;curved=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-0" target="2mBKKS4B85jo0T16Rx_9-43" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="401" y="655" as="sourcePoint" />
    </mxGeometry>
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-0" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;fontColor=#000000;strokeColor=#00CC00;" parent="2mBKKS4B85jo0T16Rx_9-0" source="2mBKKS4B85jo0T16Rx_9-22" target="2mBKKS4B85jo0T16Rx_9-11" edge="1">
    <mxGeometry relative="1" as="geometry">
      <Array as="points">
        <mxPoint x="26" y="742" />
        <mxPoint x="26" y="312" />
        <mxPoint x="128" y="312" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-22" value="Corporate End User (VPN)" style="swimlane;strokeColor=#FFC200;fillColor=#FFC200;" parent="2mBKKS4B85jo0T16Rx_9-0" vertex="1">
    <mxGeometry x="306" y="647" width="190" height="190" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-8" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;labelBackgroundColor=none;fontColor=#000000;strokeColor=#FFC200;fillColor=#FFC200;" parent="2mBKKS4B85jo0T16Rx_9-22" vertex="1">
    <mxGeometry x="69.88999999999987" y="94" width="36.61" height="36.61" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-27" value="Guest Zone" style="swimlane;shadow=0;glass=0;sketch=0;strokeWidth=1;gradientColor=none;fillColor=#FF0000;strokeColor=#FF0000;fontColor=#FFFFFF;" parent="2mBKKS4B85jo0T16Rx_9-0" vertex="1">
    <mxGeometry x="564.64" y="380" width="170" height="200" as="geometry" />
  </mxCell>
  <mxCell id="pMUJ_0llIpgrzA8LU3mH-7" value="" style="aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.laptop;fontColor=#FFFFFF;" parent="2mBKKS4B85jo0T16Rx_9-27" vertex="1">
    <mxGeometry x="100.36000000000013" y="62" width="50" height="30" as="geometry" />
  </mxCell>
  <mxCell id="pMUJ_0llIpgrzA8LU3mH-9" value="Guest" style="aspect=fixed;html=1;points=[];align=center;image;fontSize=12;image=img/lib/mscae/Person.svg;strokeColor=#FF0000;fillColor=#FF0000;" parent="2mBKKS4B85jo0T16Rx_9-27" vertex="1">
    <mxGeometry x="66.50000000000013" y="115" width="37" height="50" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-5" value="" style="pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.cell_phone_generic;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-27" vertex="1">
    <mxGeometry x="31.360000000000127" y="58.5" width="21" height="37" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-32" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-0" source="2mBKKS4B85jo0T16Rx_9-36" target="2mBKKS4B85jo0T16Rx_9-5" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-33" style="edgeStyle=orthogonalEdgeStyle;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.703;entryY=-0.014;entryDx=0;entryDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;entryPerimeter=0;rounded=1;" parent="2mBKKS4B85jo0T16Rx_9-0" target="2mBKKS4B85jo0T16Rx_9-14" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="554.64" y="215" as="sourcePoint" />
      <Array as="points">
        <mxPoint x="494.64" y="215" />
        <mxPoint x="494.64" y="290" />
        <mxPoint x="157.64" y="290" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-34" style="edgeStyle=orthogonalEdgeStyle;curved=1;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-0" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="594.64" y="245" as="sourcePoint" />
      <mxPoint x="474" y="410" as="targetPoint" />
      <Array as="points">
        <mxPoint x="554.64" y="245" />
        <mxPoint x="554.64" y="410" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-35" style="edgeStyle=orthogonalEdgeStyle;curved=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;startArrow=none;startFill=0;strokeColor=#00CC00;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-0" source="2mBKKS4B85jo0T16Rx_9-36" target="2mBKKS4B85jo0T16Rx_9-27" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-36" value="Admin Zone (VPN)" style="swimlane;fontColor=#ffffff;fillColor=#1ba1e2;strokeColor=#006EAF;" parent="2mBKKS4B85jo0T16Rx_9-0" vertex="1">
    <mxGeometry x="554.64" y="55" width="190" height="190" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-39" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=classic;startFill=1;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-36" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="99.99999999999864" y="65" as="targetPoint" />
    </mxGeometry>
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-77" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;labelBackgroundColor=none;fontColor=#000000;fillColor=#00CC00;strokeColor=#00CC00;" parent="2mBKKS4B85jo0T16Rx_9-36" vertex="1">
    <mxGeometry x="73.75" y="79.5" width="36.61" height="36.61" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-43" value="DMZ" style="swimlane;shadow=0;glass=0;sketch=0;strokeWidth=1;gradientColor=none;fillColor=#FFC200;strokeColor=#FFC200;" parent="2mBKKS4B85jo0T16Rx_9-0" vertex="1">
    <mxGeometry x="327.63" y="345" width="147.37" height="210" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-44" value="" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-43" vertex="1">
    <mxGeometry x="26.730000000000018" y="50" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-45" value="" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-43" vertex="1">
    <mxGeometry x="26.730000000000018" y="130" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-46" value="" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-43" vertex="1">
    <mxGeometry x="88.37000000000002" y="130" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-47" value="" style="points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.server;fillColor=#005073;strokeColor=none;shadow=0;glass=0;sketch=0;fontColor=#000000;" parent="2mBKKS4B85jo0T16Rx_9-43" vertex="1">
    <mxGeometry x="88.37000000000002" y="50" width="27.500000000000004" height="50" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-28" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.07;exitY=0.4;exitDx=0;exitDy=0;fontColor=#000000;startArrow=classic;startFill=1;endArrow=classic;endFill=1;strokeColor=#00CC00;entryX=0.564;entryY=1;entryDx=0;entryDy=0;entryPerimeter=0;exitPerimeter=0;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="G_Lm-U83OFBGjxTVm_0d-12" target="YaHfdmI8Y5IrUWW2_QyJ-1" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="1216" y="-147" as="targetPoint" />
    </mxGeometry>
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-29" value="" style="group" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1" connectable="0">
    <mxGeometry x="712" y="-623" width="894" height="348" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-1" value="Saas Apps" style="html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.cloud;fontColor=#000000;fillColor=none;" parent="YaHfdmI8Y5IrUWW2_QyJ-29" vertex="1">
    <mxGeometry width="894" height="348" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-26" value="" style="group" parent="YaHfdmI8Y5IrUWW2_QyJ-29" vertex="1" connectable="0">
    <mxGeometry x="455.25" y="116.58883248730965" width="353.5" height="197.18527918781726" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-0" value="Secure SaaS Zone" style="html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;shadow=0;dashed=0;shape=mxgraph.ios7.icons.cloud;fontColor=#000000;fillColor=none;strokeColor=#FFC200;" parent="YaHfdmI8Y5IrUWW2_QyJ-26" vertex="1">
    <mxGeometry width="353" height="197.18527918781726" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-22" value="" style="group" parent="YaHfdmI8Y5IrUWW2_QyJ-26" vertex="1" connectable="0">
    <mxGeometry x="34" y="30.030456852791875" width="319.5" height="160.4244670050761" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-12" value="" style="image;image=img/lib/atlassian/Atlassian_Logo.svg;fontColor=#000000;strokeColor=#FFC200;fillColor=#FFFFFF;" parent="YaHfdmI8Y5IrUWW2_QyJ-22" vertex="1">
    <mxGeometry x="46" y="122.77157360406089" width="32" height="28.26395939086294" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-21" value="" style="group" parent="YaHfdmI8Y5IrUWW2_QyJ-22" vertex="1" connectable="0">
    <mxGeometry width="319.5" height="160.4244670050761" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-16" value="Zendesk" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="142" width="40" height="19.43147208121827" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-19" value="Concur" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="99" y="52.99492385786801" width="40" height="17.664974619289335" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-22" value="" style="dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.linkedin;fillColor=#0095DB;gradientColor=#006391;fontColor=#000000;strokeColor=#FFC200;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="4" y="122.77157360406089" width="32" height="27.380710659898472" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-28" value="Everbridge" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="39" y="35.32994923857867" width="40" height="17.664974619289335" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-29" value="Zoom" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="192" y="40.62944162436548" width="40" height="17.664974619289335" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-31" value="Slack" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="123" y="30.030456852791872" width="40" height="17.664974619289335" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-3" value="" style="dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.twitter;fillColor=#49EAF7;gradientColor=#137BD0;fontColor=#000000;strokeColor=#FFC200;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="94" y="121.88832487309642" width="32" height="28.26395939086294" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-4" value="" style="dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.stackoverflow;gradientColor=#DFDEDE;fontColor=#000000;strokeColor=#FFC200;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry y="84.79187817258881" width="32" height="28.26395939086294" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-5" value="" style="dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.confluence;gradientColor=#DFDEDE;fontColor=#000000;strokeColor=#FFC200;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="39" y="84.79187817258881" width="32" height="28.26395939086294" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-11" value="Mimecaster Central" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="104" y="83.02538071065989" width="40" height="17.664974619289335" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-13" value="Pendo" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="157" y="60.94416243654821" width="40.76" height="18.000609137055832" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-14" value="Five9" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="152" y="105.10659898477155" width="40" height="17.664974619289335" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-15" value="iCIMS" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="220" y="70.65989847715734" width="40" height="17.664974619289335" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-16" value="Adaptive Insight" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="253" y="98.04060913705581" width="40" height="16.781725888324868" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-17" value="JIRA" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="24" y="61.279796954314705" width="40" height="17.664974619289335" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-18" value="FCM Travel Solutions" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-21" vertex="1">
    <mxGeometry x="200" y="125.42131979695428" width="40" height="17.664974619289335" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-25" value="" style="group" parent="YaHfdmI8Y5IrUWW2_QyJ-29" vertex="1" connectable="0">
    <mxGeometry x="38" y="109.00309644670051" width="367" height="207.56345177664977" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-3" value="High Security SaaS Zone" style="html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;shadow=0;dashed=0;shape=mxgraph.ios7.icons.cloud;fontColor=#000000;fillColor=none;strokeColor=#00CC00;" parent="YaHfdmI8Y5IrUWW2_QyJ-25" vertex="1">
    <mxGeometry width="367" height="207.56345177664977" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-24" value="" style="group" parent="YaHfdmI8Y5IrUWW2_QyJ-25" vertex="1" connectable="0">
    <mxGeometry x="36" y="30.03045685279188" width="308" height="167.37563451776649" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-6" value="" style="outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cloud_2;fillColor=#F58534;gradientColor=none;fontColor=#000000;strokeColor=#FFC200;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry y="98.9238578680203" width="33" height="30.030456852791875" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-7" value="WorkDay" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="70" y="42.39593908629441" width="40" height="17.66497461928934" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-8" value="SalesForce" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="116" y="70.65989847715736" width="40" height="17.66497461928934" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-9" value="NetSuite" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="205" y="28.26395939086294" width="39" height="17.223350253807105" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-10" value="" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.github_code;pointerEvents=1;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="22" y="135.13705583756345" width="37" height="30.913705583756343" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-11" value="" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.bitbucket_code_source;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="51" y="101.5736040609137" width="26" height="27.380710659898476" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-13" value="" style="pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.office_365;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="88" y="101.5736040609137" width="55" height="26.49746192893401" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-14" value="Boomi" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="132.5" y="28.26395939086294" width="40" height="17.66497461928934" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-15" value="E-Trade" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="156" width="49" height="17.66497461928934" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-18" value="ADP" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="172.5" y="52.99492385786802" width="40" height="17.66497461928934" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-20" value="Docebo" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="221" y="70.65989847715736" width="40" height="18.548223350253807" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-23" value="" style="pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.cloud_exchange_online;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="149" y="100.69035532994923" width="55" height="26.49746192893401" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-24" value="" style="aspect=fixed;html=1;points=[];align=center;image;fontSize=12;image=img/lib/mscae/Azure_AD_Domain_Services.svg;fontColor=#000000;strokeColor=#FFC200;fillColor=#FFC200;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="67" y="133.81218274111674" width="33.56345177664974" height="33.56345177664974" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-25" value="Marketo" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="37" y="70.65989847715736" width="40" height="17.66497461928934" as="geometry" />
  </mxCell>
  <mxCell id="gzgXsWX-3BIkx-rG8dtU-26" value="DocuSign" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="244" y="101.5736040609137" width="40" height="17.66497461928934" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-2" value="" style="dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google_drive;fontColor=#000000;strokeColor=#FFC200;fillColor=none;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="112" y="133.81218274111674" width="37" height="29.147208121827408" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-9" value="Azure" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="223" y="121.88832487309644" width="24" height="19.43147208121827" as="geometry" />
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-10" value="GCP" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;" parent="YaHfdmI8Y5IrUWW2_QyJ-24" vertex="1">
    <mxGeometry x="284" y="125.42131979695431" width="24" height="19.43147208121827" as="geometry" />
  </mxCell>
  <mxCell id="4p3_lzOBrswkxu9EAsBI-0" value="" style="endArrow=classic;html=1;fontColor=#FFFFFF;strokeColor=#00CC00;exitX=0.843;exitY=0.449;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.15;entryY=0.416;entryDx=0;entryDy=0;entryPerimeter=0;" parent="YaHfdmI8Y5IrUWW2_QyJ-29" source="gzgXsWX-3BIkx-rG8dtU-3" target="YaHfdmI8Y5IrUWW2_QyJ-0" edge="1">
    <mxGeometry width="50" height="50" relative="1" as="geometry">
      <mxPoint x="476" y="554" as="sourcePoint" />
      <mxPoint x="526" y="504" as="targetPoint" />
    </mxGeometry>
  </mxCell>
  <mxCell id="YaHfdmI8Y5IrUWW2_QyJ-31" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.88;exitY=0.25;exitDx=0;exitDy=0;entryX=0.431;entryY=0.991;entryDx=0;entryDy=0;entryPerimeter=0;fontColor=#000000;startArrow=classic;startFill=1;endArrow=classic;endFill=1;strokeColor=#00CC00;exitPerimeter=0;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="1wJCmiXCzcZoRwwKPZ_C-1" target="YaHfdmI8Y5IrUWW2_QyJ-1" edge="1">
    <mxGeometry relative="1" as="geometry">
      <Array as="points">
        <mxPoint x="1098" y="953" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-1" value="MC-Laptop" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#282c5f;shape=mxgraph.azure.laptop;pointerEvents=1;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="899" y="944" width="50" height="30" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-3" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=classic;startFill=1;fontColor=#000000;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="GWHm9WMeJzEjBmVMQvOX-4" target="GWHm9WMeJzEjBmVMQvOX-1" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-4" value="FalconHost&lt;br&gt;MSA&lt;br&gt;Sophos" style="fillColor=#28A8E0;verticalLabelPosition=bottom;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.anti_virus;fontColor=#000000;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="817" y="937.5" width="43" height="43" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-2" value="" style="group;fillColor=#ffffff;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1" connectable="0">
    <mxGeometry x="712" y="-236" width="274" height="187" as="geometry" />
  </mxCell>
  <mxCell id="1wJCmiXCzcZoRwwKPZ_C-0" value="" style="ellipse;shape=cloud;whiteSpace=wrap;html=1;strokeColor=#FFC200;fillColor=#FFC200;" parent="G_Lm-U83OFBGjxTVm_0d-2" vertex="1">
    <mxGeometry width="274" height="187" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-37" value="MC-Laptop" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#282c5f;shape=mxgraph.azure.laptop;pointerEvents=1;" parent="G_Lm-U83OFBGjxTVm_0d-2" vertex="1">
    <mxGeometry x="148" y="42.5" width="50" height="30" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-40" value="FalconHost&lt;br&gt;MSA&lt;br&gt;Sophos" style="fillColor=#28A8E0;verticalLabelPosition=bottom;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.anti_virus;fontColor=#000000;" parent="G_Lm-U83OFBGjxTVm_0d-2" vertex="1">
    <mxGeometry x="71" y="36" width="43" height="43" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-38" value="TechOps" style="aspect=fixed;points=[];align=center;image;fontSize=12;image=img/lib/mscae/Person.svg;labelBackgroundColor=none;html=1;labelBorderColor=none;" parent="G_Lm-U83OFBGjxTVm_0d-2" vertex="1">
    <mxGeometry x="127" y="102" width="37" height="50" as="geometry" />
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-39" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=classic;startFill=1;fontColor=#000000;" parent="G_Lm-U83OFBGjxTVm_0d-2" source="GWHm9WMeJzEjBmVMQvOX-40" target="GWHm9WMeJzEjBmVMQvOX-37" edge="1">
    <mxGeometry x="875" y="-203" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-5" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.88;exitY=0.25;exitDx=0;exitDy=0;exitPerimeter=0;fontColor=#000000;entryX=0.372;entryY=1.003;entryDx=0;entryDy=0;entryPerimeter=0;strokeColor=#00CC00;startArrow=classic;startFill=1;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="1wJCmiXCzcZoRwwKPZ_C-0" target="YaHfdmI8Y5IrUWW2_QyJ-1" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="1038" y="-234" as="targetPoint" />
      <Array as="points">
        <mxPoint x="1045" y="-190" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-7" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.96;exitY=0.7;exitDx=0;exitDy=0;exitPerimeter=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;fontColor=#000000;startArrow=classic;startFill=1;strokeColor=#00CC00;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="1wJCmiXCzcZoRwwKPZ_C-0" target="G_Lm-U83OFBGjxTVm_0d-6" edge="1">
    <mxGeometry relative="1" as="geometry">
      <Array as="points">
        <mxPoint x="1075" y="-106" />
        <mxPoint x="1075" y="138" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="GWHm9WMeJzEjBmVMQvOX-2" value="Engineer" style="aspect=fixed;html=1;points=[];align=center;image;fontSize=12;image=img/lib/mscae/Person.svg;labelBackgroundColor=none;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="873" y="1008" width="37" height="50" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-14" value="" style="group" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1" connectable="0">
    <mxGeometry x="1756" y="877" width="288" height="195" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-12" value="" style="ellipse;shape=cloud;whiteSpace=wrap;html=1;labelBackgroundColor=none;fontColor=#000000;fillColor=#FFC200;strokeColor=#FFC200;" parent="G_Lm-U83OFBGjxTVm_0d-14" vertex="1">
    <mxGeometry width="288" height="195" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-26" value="FalconHost&lt;br&gt;MSA&lt;br&gt;Sophos" style="fillColor=#28A8E0;verticalLabelPosition=bottom;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.anti_virus;fontColor=#000000;" parent="G_Lm-U83OFBGjxTVm_0d-14" vertex="1">
    <mxGeometry x="77.30630136986312" y="38.75" width="42.410958904109584" height="43" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-23" value="MC-Laptop" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#282c5f;shape=mxgraph.azure.laptop;pointerEvents=1;" parent="G_Lm-U83OFBGjxTVm_0d-14" vertex="1">
    <mxGeometry x="171.25150684931518" y="45.25" width="49.31506849315068" height="30" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-24" value="Mimecaster" style="aspect=fixed;html=1;points=[];align=center;image;fontSize=12;image=img/lib/mscae/Person.svg;labelBackgroundColor=none;" parent="G_Lm-U83OFBGjxTVm_0d-14" vertex="1">
    <mxGeometry x="144" y="103.5" width="36.49315068493151" height="49.31506849315068" as="geometry" />
  </mxCell>
  <mxCell id="2mBKKS4B85jo0T16Rx_9-25" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=classic;startFill=1;fontColor=#000000;" parent="G_Lm-U83OFBGjxTVm_0d-14" source="2mBKKS4B85jo0T16Rx_9-26" target="2mBKKS4B85jo0T16Rx_9-23" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-15" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;entryX=1;entryY=1;entryDx=0;entryDy=0;fontColor=#000000;startArrow=classic;startFill=1;strokeColor=#00CC00;exitX=0.13;exitY=0.77;exitDx=0;exitDy=0;exitPerimeter=0;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="G_Lm-U83OFBGjxTVm_0d-12" target="G_Lm-U83OFBGjxTVm_0d-8" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="1725" y="969" as="sourcePoint" />
    </mxGeometry>
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-17" value="&lt;b&gt;Internet&lt;/b&gt;" style="whiteSpace=wrap;html=1;shape=mxgraph.basic.cloud_rect;labelBackgroundColor=none;fontColor=#FFFFFF;strokeColor=#FF0000;fillColor=#FF0000;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="188" y="-638" width="1959" height="22" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-18" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.07;exitY=0.4;exitDx=0;exitDy=0;exitPerimeter=0;fontColor=#FFFFFF;startArrow=classic;startFill=1;strokeColor=#00CC00;entryX=0.166;entryY=0.947;entryDx=0;entryDy=0;entryPerimeter=0;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="1wJCmiXCzcZoRwwKPZ_C-0" target="G_Lm-U83OFBGjxTVm_0d-17" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="514" y="-569" as="targetPoint" />
      <Array as="points">
        <mxPoint x="513" y="-161" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-20" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.981;entryY=0.955;entryDx=0;entryDy=0;entryPerimeter=0;fontColor=#FFFFFF;startArrow=classic;startFill=1;strokeColor=#00CC00;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="2mBKKS4B85jo0T16Rx_9-27" target="G_Lm-U83OFBGjxTVm_0d-17" edge="1">
    <mxGeometry relative="1" as="geometry">
      <Array as="points">
        <mxPoint x="2109" y="468" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-21" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.875;exitY=0.5;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.993;entryY=0.864;entryDx=0;entryDy=0;entryPerimeter=0;fontColor=#FFFFFF;startArrow=classic;startFill=1;strokeColor=#00CC00;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="G_Lm-U83OFBGjxTVm_0d-12" target="G_Lm-U83OFBGjxTVm_0d-17" edge="1">
    <mxGeometry relative="1" as="geometry">
      <Array as="points">
        <mxPoint x="2132" y="975" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-69" value="" style="group" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1" connectable="0">
    <mxGeometry x="1756" y="-275" width="288" height="195" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-70" value="" style="ellipse;shape=cloud;whiteSpace=wrap;html=1;labelBackgroundColor=none;fontColor=#000000;fillColor=#FFC200;strokeColor=#FFC200;" parent="G_Lm-U83OFBGjxTVm_0d-69" vertex="1">
    <mxGeometry width="288" height="195" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-71" value="FalconHost&lt;br&gt;MSA&lt;br&gt;Sophos" style="fillColor=#28A8E0;verticalLabelPosition=bottom;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.anti_virus;fontColor=#000000;" parent="G_Lm-U83OFBGjxTVm_0d-69" vertex="1">
    <mxGeometry x="77.30630136986312" y="38.75" width="42.410958904109584" height="43" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-72" value="MC-Laptop" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#282c5f;shape=mxgraph.azure.laptop;pointerEvents=1;" parent="G_Lm-U83OFBGjxTVm_0d-69" vertex="1">
    <mxGeometry x="171.25150684931518" y="45.25" width="49.31506849315068" height="30" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-73" value="IT" style="aspect=fixed;html=1;points=[];align=center;image;fontSize=12;image=img/lib/mscae/Person.svg;labelBackgroundColor=none;" parent="G_Lm-U83OFBGjxTVm_0d-69" vertex="1">
    <mxGeometry x="144" y="103.5" width="36.49315068493151" height="49.31506849315068" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-74" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=classic;startFill=1;fontColor=#000000;" parent="G_Lm-U83OFBGjxTVm_0d-69" source="G_Lm-U83OFBGjxTVm_0d-71" target="G_Lm-U83OFBGjxTVm_0d-72" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-75" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.07;exitY=0.4;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.735;entryY=0.997;entryDx=0;entryDy=0;entryPerimeter=0;fontColor=#FFFFFF;startArrow=classic;startFill=1;strokeColor=#00CC00;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="G_Lm-U83OFBGjxTVm_0d-70" target="YaHfdmI8Y5IrUWW2_QyJ-1" edge="1">
    <mxGeometry relative="1" as="geometry" />
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-76" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.96;exitY=0.7;exitDx=0;exitDy=0;exitPerimeter=0;fontColor=#FFFFFF;startArrow=classic;startFill=1;strokeColor=#00CC00;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="G_Lm-U83OFBGjxTVm_0d-70" target="G_Lm-U83OFBGjxTVm_0d-77" edge="1">
    <mxGeometry relative="1" as="geometry">
      <mxPoint x="2089.2941176470586" y="171.0588235294117" as="targetPoint" />
      <Array as="points">
        <mxPoint x="2086" y="-138" />
        <mxPoint x="2086" y="141" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="G_Lm-U83OFBGjxTVm_0d-78" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.88;exitY=0.25;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.962;entryY=1.013;entryDx=0;entryDy=0;entryPerimeter=0;fontColor=#FFFFFF;startArrow=classic;startFill=1;strokeColor=#00CC00;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" source="G_Lm-U83OFBGjxTVm_0d-70" target="G_Lm-U83OFBGjxTVm_0d-17" edge="1">
    <mxGeometry relative="1" as="geometry">
      <Array as="points">
        <mxPoint x="2073" y="-226" />
      </Array>
    </mxGeometry>
  </mxCell>
  <mxCell id="7arZvZ66M6WQAS8OFMhf-1" value="Network 2FA&lt;br&gt;(FortiToken)" style="points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.lock;strokeColor=none;fillColor=#FF0000;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="587.5" y="861" width="35" height="35" as="geometry" />
  </mxCell>
  <mxCell id="7arZvZ66M6WQAS8OFMhf-2" value="Network 2FA&lt;br&gt;(FortiToken)" style="points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.lock;strokeColor=none;fillColor=#FF0000;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="1044" y="59" width="35" height="35" as="geometry" />
  </mxCell>
  <mxCell id="7arZvZ66M6WQAS8OFMhf-3" value="Network 2FA&lt;br&gt;(FortiToken)" style="points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.lock;strokeColor=none;fillColor=#FF0000;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="1639" y="869" width="35" height="35" as="geometry" />
  </mxCell>
  <mxCell id="7arZvZ66M6WQAS8OFMhf-4" value="Network 2FA&lt;br&gt;(FortiToken)" style="points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.lock;strokeColor=none;fillColor=#FF0000;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="2069" y="23" width="35" height="35" as="geometry" />
  </mxCell>
  <mxCell id="7arZvZ66M6WQAS8OFMhf-5" value="SAML SSO" style="outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3E;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.saml_token;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="1115" y="-243" width="29" height="29" as="geometry" />
  </mxCell>
  <mxCell id="7arZvZ66M6WQAS8OFMhf-6" value="SAML SSO" style="outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3E;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.saml_token;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="998" y="-256" width="30" height="30" as="geometry" />
  </mxCell>
  <mxCell id="7arZvZ66M6WQAS8OFMhf-7" value="SAML SSO" style="outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3E;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.saml_token;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="1236" y="-243.5" width="30" height="30" as="geometry" />
  </mxCell>
  <mxCell id="7arZvZ66M6WQAS8OFMhf-8" value="SAML SSO" style="outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3E;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.saml_token;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="1387" y="-256" width="30" height="30" as="geometry" />
  </mxCell>
  <mxCell id="F-8Ol5r1wMRwzkSK7EZM-0" value="Endpoint&lt;br&gt;Certificate&lt;br&gt;Authentication" style="outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#277116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.certificate_manager;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="1045.2600000000002" y="-36" width="28.74" height="38" as="geometry" />
  </mxCell>
  <mxCell id="F-8Ol5r1wMRwzkSK7EZM-1" value="Endpoint Certificate&lt;br&gt;Authentication" style="outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#277116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.certificate_manager;" parent="7ZAuyyWEkKCXNhUEa2Ve-1" vertex="1">
    <mxGeometry x="592.0000000000002" y="934" width="28.74" height="38" as="geometry" />
  </mxCell>
</root>  `

}
