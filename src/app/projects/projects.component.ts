import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { Project } from '../models/workspace';
import { ElectronIPC } from '../services/electron.service';
import { ZeroTrustService } from '../services/zero-trust.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects$: Observable<Project[]>;
  projNameSearch = '';
  faSearch = faSearch;
  showSpinner = true;

  subscriptions: Subscription;

  constructor(private zt: ZeroTrustService, private ipc: ElectronIPC) {

  }

  ngOnInit(): void {
    this.zt.setSpinnerState(true);

    this.subscriptions = this.zt.spinnerState.subscribe(spin => {
      setTimeout(() => this.showSpinner = spin, 0);
    });
    this.projects$ = this.zt.getProjects();

    this.subscriptions.add(this.projects$.subscribe({
      next: x => {
        console.log('Got projects', x);

        this.zt.setSpinnerState(false);
      },
      error: err => {
        this.zt.setSpinnerState(false);
        console.error(err);

      }
    }));
  }

  downloadProjectsReport() { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


}



