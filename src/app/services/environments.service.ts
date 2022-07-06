import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Environment } from 'src/environments/ienvironment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentsService {

  constructor() { }

  getEnvironment(): Environment {
    return environment;
  }
}
