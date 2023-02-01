import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { SharedModule } from '../shared/shared.module';
import { ExperienceRoutingModule } from './experience-routing.module';



@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExperienceRoutingModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
