
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
  description: string;
  owner: string;
  ownerContact: string;
  attributes?: Record<string, string>;
}

// export interface ProjectDescription {
//   name: string;
//   workspace: string;
//   threatModel: string
// }


Map.prototype.toJson = function toJson() {
  return JSON.stringify(Array.from(this.entries()));
}
