import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ProjectSetupComponent } from './project-setup/project-setup.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { NgxIsElectronModule } from 'projects/ngx-is-electron/src/public-api';
import { NgxMxgraphModule } from "projects/ngx-mxgraph/src/public-api";
import { ViewModelComponent } from './view-model/view-model.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { ProjectFilterPipe } from './pipes/project-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewModelComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProjectEditComponent,
    ProjectsComponent,
    SettingsComponent,
    ProjectSetupComponent,
    ProjectSummaryComponent,
    ProjectFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    HttpClientModule,
    MatStepperModule,
    MatFormFieldModule,
    FontAwesomeModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
    NgxIsElectronModule,
    NgxMxgraphModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
