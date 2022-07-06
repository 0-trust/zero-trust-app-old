import factory, { mxEventSource, mxGeometry, mxGraphExportObject, mxGraphModel, mxRectangle } from 'mxgraph';

declare global {
  interface Window {
    mxBasePath: string;
    mxLoadResources: boolean;
    mxForceIncludes: boolean;
    mxLoadStylesheets: boolean;
    mxResourceExtension: string;
  }
}

window.mxBasePath = '../../../assets/mxgraph';
window.mxLoadResources = true;
window.mxForceIncludes = true;
window.mxLoadStylesheets = true;
window.mxResourceExtension = '.txt';




export default factory.call(window, {
  // not working see https://github.com/jgraph/mxgraph/issues/479
  mxBasePath: '../../../assets/mxgraph',
}) as mxGraphExportObject;

