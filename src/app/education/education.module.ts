import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { SharedModule } from '../shared/shared.module';
import { EducationRoutingModule } from './education-routing.module';



@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    EducationComponent
  ]
})
export class EducationModule { }
