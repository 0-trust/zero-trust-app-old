import { Injectable } from '@angular/core';
import { tap, catchError, EMPTY, Observable, retry, Subject } from 'rxjs';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { Message } from '../models/messages';
import { ZeroTrustService } from './zero-trust.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketManagerService {

  private socket$: WebSocketSubject<Message>;
  messageStream$ = new Subject<Message>()
  constructor(private zt: ZeroTrustService) { }

  connectMessageSocket(projID: string): WebSocketSubject<Message> {
    const ws = webSocket<Message>({
      url: this.zt.getMessageWebSocketEndpoint(),
      closeObserver: {
        next: (evt) => {
          // console.log('[ZT socket]: connection closed', evt);
          this.socket$ = undefined;
          this.connect({ reconnect: true, projectID: projID })
        }
      },
      openObserver: {
        next: () => {
          console.log('[ZT Socket]: new connection');
        }
      },
    })
    ws.subscribe({
      next: msg => {
        this.messageStream$.next(msg)
      }
    })
    return ws
  }

  close() {
    if (this.socket$) {
      this.socket$.complete()
    }
    this.socket$ = undefined
  }

  sendMessage(msg: Message) {
    // console.log('[ZT sending message]', msg);
    if (this.socket$) {
      this.socket$.next(msg)
      // console.log('message sent');
    } else {
      // console.log('reconnecting');
      this.connect({ reconnect: true, projectID: msg.projectID })
      this.sendMessage(msg)
    }
  }

  connect(cfg: { reconnect: boolean; projectID: string } = { reconnect: false, projectID: '' }): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.connectMessageSocket(cfg.projectID)
      this.socket$.subscribe(x => this.messageStream$.next(x))
    }
  }



  // private reconnect(observable: Observable<any>): Observable<any> {
  //   return observable.pipe(retry({
  //     count: 5,
  //     delay: 3000,
  //   }))
  // }


}
