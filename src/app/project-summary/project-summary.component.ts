import { Component, Input, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { Project } from '../models/workspace';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit {

  faSettings = faEdit;

  @Input() project: Project;

  constructor() { }

  ngOnInit(): void {
  }

  editProject() {

  }

}
