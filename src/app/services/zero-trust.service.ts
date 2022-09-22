import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElectronIPC } from './electron.service';
import { EnvironmentsService } from './environments.service';
import { Message, Model } from '../models/messages';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project, Workspace } from '../models/workspace';

@Injectable({
  providedIn: 'root'
})
export class ZeroTrustService {

  private showSpinner = new BehaviorSubject<boolean>(false);

  private currentProject$ = new BehaviorSubject<string>('');
  private projectModels$ = new BehaviorSubject<Record<string, Model>>({});

  private apiPort = 18273;
  private api = `http://localhost:${this.apiPort}/api`;//default, values set from environment service
  private wsAPI = `ws://localhost:${this.apiPort}/api`;//default, values set from environment service
  // private socket$: WebSocketSubject<Message>;

  // private messageSubject$ = new Subject();
  // public messages$ = this.messageSubject$.pipe(switchAll(), catchError(e => { throw e }))


  constructor(private http: HttpClient, private electron: ElectronIPC, env: EnvironmentsService) {
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


  getMessageWebSocketEndpoint(): string {
    return `${this.wsAPI}/message`
  }

  // connectMessageSocket(projID: string): WebSocketSubject<Message> {
  //   const ws = webSocket<Message>({
  //     url: `${this.wsAPI}/message`,
  //     closeObserver: {
  //       next: (evt) => {
  //         console.log('[ZT socket]: connection closed', evt);
  //         this.socket$ = undefined;
  //         this.connect({ reconnect: true, projectID: projID })
  //       }
  //     },
  //     openObserver: {
  //       next: () => {
  //         console.log('[ZT Socket]: new connection');

  //       }
  //     },
  //   })
  //   ws.subscribe({
  //     next: msg => {
  //       this.messageSubject$.next(msg)
  //     }
  //   })
  //   // ws.next({ projectID: projID, type: 'get_model' })
  //   return ws
  // }

  // close() {
  //   if (this.socket$) {
  //     this.socket$.complete()
  //   }
  //   this.socket$ = undefined
  // }

  // sendMessage(msg: Message) {
  //   console.log('[ZT sending message]', msg);

  //   if (this.socket$) {
  //     this.socket$.next(msg)
  //     console.log('message sent');


  //   } else {
  //     console.log('reconnecting');

  //     this.connect({ reconnect: true, projectID: msg.projectID })
  //   }
  // }

  // connect(cfg: { reconnect: boolean; projectID: string } = { reconnect: false, projectID: '' }): void {
  //   if (!this.socket$ || this.socket$.closed) {
  //     this.socket$ = this.connectMessageSocket(cfg.projectID)
  //     const messages = this.socket$.pipe(cfg.reconnect ? this.reconnect : o => o,
  //       tap({
  //         error: err => console.log(err),
  //       }), catchError(_ => EMPTY))
  //     this.messageSubject$.next(messages)
  //     // this.socket$.subscribe(x => this.messageSubject$.next(x))
  //   }

  // }



  // private reconnect(observable: Observable<any>): Observable<any> {
  //   return observable.pipe(retry({
  //     count: 5,
  //     delay: 3000,
  //   }))
  // }

  // messageSocket(message: Message): WebSocketSubject<Message> {
  //   const ws = webSocket<Message>(`${this.wsAPI}/message`);
  //   ws.next(message);
  //   return ws;
  // }

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

  getModel(projID: string): Observable<Model> {
    return this.http.get<Model>(`${this.api}/project/model/${projID}`);
  }


  createProject(projDesc: Project): Observable<Project> {
    return this.http.post<Project>(`${this.api}/project/create`, projDesc);
  }

  updateProject(id: string, projDesc: Project) {
    return this.http.post<Project>(
      `${this.api}/project/update/${id}`,
      projDesc
    );
  }


  deleteProject(projectID: string): Observable<string> {
    return this.http.post<string>(`${this.api}/project/delete`, { ProjectID: projectID });
  }

  public setSpinnerState(v: boolean) {
    this.showSpinner.next(v);
  }

  get spinnerState(): Observable<boolean> {
    return this.showSpinner.asObservable();
  }

  get currentProjectObservable(): Observable<string> {
    return this.currentProject$.asObservable()
  }

  set currentProject(id: string) {
    this.currentProject$.next(id)
  }

  get projectModels(): Observable<Record<string, Model>> {
    return this.projectModels$.asObservable()
  }

  updateprojectModel(projectID: string, model: Model) {
    const record = this.projectModels$.getValue()
    record[projectID] = model
    this.projectModels$.next(record)
  }

  updateModel(msg: Message): Observable<Message> {
    return this.http.post<Message>(`${this.api}/project/updatemodel`, msg)
  }

}
