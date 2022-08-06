export interface Message {
  type?: string;
  projectID: string;
  workspace?: string;
  threatModel?: string;
  visualModel?: string;
  hasError?: boolean;
  error?: string;
}


