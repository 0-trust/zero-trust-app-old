import { Injectable } from '@angular/core';
import { NgxIsElectronService } from 'ngx-is-electron';


@Injectable({
  providedIn: 'root'
})
export class ElectronIPC {

  constructor(private electronService: NgxIsElectronService) {

  }

  /**
   * getAPIConfig
   */
  public getAPIConfig(): Promise<number> {
    if (this.electronService.isElectronApp) {
      return this.electronService.ipcRenderer.invoke('api-config');
    }
    return new Promise(() =>
      18273 //default port chosen
    );
  }


}
