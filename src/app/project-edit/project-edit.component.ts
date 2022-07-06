import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxIsElectronService } from 'ngx-is-electron';
import { Subscription } from 'rxjs';
import { faEdit, faSave, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ElectronIPC } from '../services/electron.service';
import { ZeroTrustService } from '../services/zero-trust.service';
import { Project, ProjectDescription } from '../models/workspace';



@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  faEdit = faEdit;
  faAdd = faPlus;
  faSave = faSave;
  faDelete = faTrashAlt;
  appName = 'Zero Trust';
  showNewRepo = false;

  existingWorkspaces: string[] = ['Default'];
  spinForProject: boolean;
  spinForProjectSummary: boolean;
  project: Project;
  project$: Subscription;
  projectForm: FormGroup;
  isInElectron: boolean;

  selectedType = 'git';
  initialNewRepoValues: any;

  constructor(private fb: FormBuilder, private router: Router,
    private ipc: ElectronIPC,
    private zt: ZeroTrustService, private electronService: NgxIsElectronService) {
    this.isInElectron = this.electronService.isElectronApp;
  }

  ngOnInit(): void {
    const path = this.router.url;
    if (path) {
      //get project ID from the route
      const subPaths = path.split('/');
      const projectID = subPaths[subPaths.length - 1];
      this.refreshProject(projectID);

      this.zt.getWorkspaceSummaries().subscribe(w => {
        if (w.details) {

          this.existingWorkspaces = [];
          for (const k of Object.keys(w.details)) {
            if (k === '') {
              this.existingWorkspaces.push('Default');
            } else {
              this.existingWorkspaces.push(k);
            }
          }
          this.existingWorkspaces = this.existingWorkspaces.filter(this.uniqueFilter);
        }

        this.projectForm = this.fb.group({
          projectName: [this.project.name, Validators.required],
          workspace: [this.project.workspace],
          newWorkspaceValue: [''],
        });
        this.initialNewRepoValues = this.projectForm.get('newRepository').value;
      });
    }

  }

  getPolicyConfigured(): boolean {
    return this.projectForm.get('scanPolicy.configured').value as boolean;
  }

  getNewRepoRequiresAuth(): boolean {
    return this.newRepository.get('requiresAuth').value as boolean;
  }

  getNewRepoType(): string {
    return this.newRepository.get('locationType').value as string;
  }

  get newRepository(): FormGroup {
    return this.projectForm.get('newRepository') as FormGroup;
  }




  uniqueFilter(value: string, index: number, self: string[]): boolean {
    return self.indexOf(value) === index;
  }

  refreshProject(projectID: string) {
    this.spinForProject = true;
    this.spinForProjectSummary = true;
    this.project$ = this.zt.getProject(projectID).subscribe(proj => {
      this.setProject(proj);
      this.spinForProject = false;
    });
  }


  setProject(proj: Project) {
    if (!proj || proj.id === '') {
      return;
    }
    this.project = proj;
  }

  updateProject() {
    const newWs = this.projectForm.get('newWorkspaceValue').value as string;
    const ws = newWs === '' ? this.projectForm.get('workspace').value as string : newWs;
    const projDesc: ProjectDescription = {
      name: this.projectForm.get('projectName').value as string,
      workspace: ws,
      threatModel: this.project.threatModel
    };

    // console.log(projDesc);

    this.zt.updateProject(this.project.id, projDesc).subscribe(x => {
      this.router.navigate(['view-model', x.id]);
    });

  }


  ngOnDestroy(): void {
    if (this.project$) {
      this.project$.unsubscribe();
    }

  }


}
