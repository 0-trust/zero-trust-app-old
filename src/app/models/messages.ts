export interface Message {
  type: string;
  projectID: string;
  workspace: string;
  openThreatModel: string;
  graphVizModel: string;
  hasError: boolean;
  error: string;
}


