
export interface Workspace {
  details: { [key: string]: WorkspaceDetail };
}

export interface WorkspaceDetail {
  projects: Project[];
}

export interface Project {
  id: string;
  name: string;
  workspace: string;
  threatModel: string
}

export interface ProjectDescription {
  name: string;
  workspace: string;
  threatModel: string
}
