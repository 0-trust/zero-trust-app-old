import { ElementRef, Injectable } from '@angular/core';
import { mxEditor, mxGraph } from 'mxgraph';
import { EditorUi } from "../../assets/js/EditorUi";
import { Editor } from "../../assets/js/Editor";
import mx from '../mxgraph-support/mxgraph';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }


  makeGraph(container: ElementRef) {

    // new EditorUi(new Editor(container.nativeElement))

    new mx.mxEditor().setGraphContainer(container.nativeElement)

  }

}
