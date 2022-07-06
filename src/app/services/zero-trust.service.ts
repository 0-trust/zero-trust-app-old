import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElectronIPC } from './electron.service';
import { EnvironmentsService } from './environments.service';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Message } from '../models/messages';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project, ProjectDescription, Workspace } from '../models/workspace';

@Injectable({
  providedIn: 'root'
})
export class ZeroTrustService {

  private showSpinner = new BehaviorSubject<boolean>(false);

  apiPort = 18273;
  api = `http://localhost:${this.apiPort}/api`;//default, values set from environment service
  wsAPI = `ws://localhost:${this.apiPort}/api`;//default, values set from environment service

  constructor(private http: HttpClient, private electron: ElectronIPC, private env: EnvironmentsService) {
    this.electron.getAPIConfig().then(port => {
      this.apiPort = port;
      this.api = `http://${env.getEnvironment().apiHost}:${port}/${env.getEnvironment().apiPath}`;
      this.wsAPI = `${env.getEnvironment().wsProtocol}://${env.getEnvironment().apiHost}:${port}/${env.getEnvironment().apiPath}`;
    }).catch((err) => {
      const port = env.getEnvironment().apiPort;
      this.apiPort = port;
      console.log(`error getting API port but attempting default port ${port}`, err);
      this.api = `http://${env.getEnvironment().apiHost}:${port}/${env.getEnvironment().apiPath}`;
      this.wsAPI = `${env.getEnvironment().wsProtocol}://${env.getEnvironment().apiHost}:${port}/${env.getEnvironment().apiPath}`;
    });
  }


  messageSocket(message: Message): WebSocketSubject<Message> {
    const ws = webSocket<Message>(`${this.wsAPI}/message`);
    ws.next(message);
    return ws;
  }

  getWorkspaceSummaries(): Observable<Workspace> {
    return this.http.get<Workspace>(`${this.api}/workspaces`);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.api}/projects`);
  }

  getVersion(): Observable<string> {
    return this.http.get<string>(`${this.api}/version`);
  }

  getProject(projID: string): Observable<Project> {
    return this.http.get<Project>(`${this.api}/project/${projID}`);
  }

  updateProject(id: string, projDesc: ProjectDescription) {
    return this.http.post<Project>(
      `${this.api}/updateproject/${id}`,
      projDesc
    );
  }

  public setSpinnerState(v: boolean) {
    this.showSpinner.next(v);
  }

  get spinnerState(): Observable<boolean> {
    return this.showSpinner.asObservable();
  }


}
