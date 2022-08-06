import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEdit, faSave, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { json } from 'stream/consumers';
import { Project, ProjectDescription } from '../models/workspace';
import { ZeroTrustService } from '../services/zero-trust.service';

@Component({
  selector: 'app-project-setup',
  templateUrl: './project-setup.component.html',
  styleUrls: ['./project-setup.component.scss']
})
export class ProjectSetupComponent implements OnInit {

  faEdit = faEdit;
  faAdd = faPlus;
  faSave = faSave;
  faDelete = faTrashAlt;

  edit = false;

  existingWorkspaces: string[] = ['Default'];
  spinForProject: boolean;
  spinForProjectSummary: boolean;
  project: Project = {
    id: '',
    description: '',
    name: '',
    owner: '',
    ownerContact: '',
    workspace: '',
    threatModel: '',
    attributes: {},

  };
  project$: Subscription;
  projectForm: FormGroup;
  subscriptions: Subscription;
  constructor(private fb: FormBuilder, private router: Router,
    private zt: ZeroTrustService) { }

  ngOnInit(): void {

    this.subscriptions = new Subscription();
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      workspace: [''],
      newWorkspaceValue: [''],
      description: [''],
      owner: [''],
      ownerContact: [''],
      attributes: this.fb.array([]),

    });

  }

  setProject(proj: Project) {
    if (!proj || proj.id === '') {
      return;
    }
    this.project = proj;
  }


  // deleteProject() {
  //   console.log('deleting project', this.project.id);
  //   this.subscriptions.add(this.zt.deleteProject(this.project.id).subscribe(_x => {
  //     this.router.navigate(['projects']);
  //   }));
  // }


  refreshProject(projectID: string) {
    this.spinForProject = true;
    this.spinForProjectSummary = true;
    this.subscriptions.add(this.zt.getProject(projectID).subscribe(proj => {
      this.setProject(proj);
      this.spinForProject = false;
    }));
  }


  uniqueFilter(value: string, index: number, self: string[]): boolean {
    return self.indexOf(value) === index;
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  createProject() {


    const newWs = this.projectForm.get('newWorkspaceValue').value as string;
    const ws = newWs === '' ? this.projectForm.get('workspace').value as string : newWs;
    const projDesc: Project = {
      name: this.projectForm.get('projectName').value as string,
      workspace: ws,
      description: this.projectForm.get('description').value as string,
      id: '',
      owner: this.projectForm.get('owner').value as string,
      ownerContact: this.projectForm.get('ownerContact').value as string,
      attributes: this.getAttributes(),

    };

    console.log(projDesc, JSON.stringify(projDesc));

    this.zt.createProject(projDesc).subscribe({
      next: (proj) => {
        console.log("Got project", proj);

      },
      error: (err) => {
        console.log(err);

      }
    })


  }

  get attributes(): FormArray<FormGroup> {
    const attr = this.projectForm.controls['attributes'];
    if (attr) {
      return attr as FormArray<FormGroup>
    }
    return this.fb.array([this.fb.group({
      key: [''],
      value: [''],
    })])

  }


  getAttributes(): Record<string, string> {
    const attrs: Record<string, string> = {}
    const rs: FormArray = this.projectForm.get('attributes') as FormArray;

    rs.controls.forEach(rc => {


      attrs[rc.get('key').value] = rc.get('value').value
      // attrs.set(rc.get('key').value, rc.get('value').value)
    });


    return attrs
  }


  deleteAttribute(index: number) {
    this.attributes.removeAt(index)
  }

  enterValue() {
    this.attributes.push(this.fb.group({
      key: [''],
      value: [''],
    }))
  }

}
