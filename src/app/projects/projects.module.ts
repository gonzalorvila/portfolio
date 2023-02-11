import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCardModule } from './project-card/project-card.module';



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectCardModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
