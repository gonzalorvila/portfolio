import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { AboutModule } from '../about/about.module';
import { EducationModule } from '../education/education.module';
import { ExperienceModule } from '../experience/experience.module';
import { ProjectsModule } from '../projects/projects.module';
import { ContactModule } from '../contact/contact.module';



@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    HeaderModule,
    AboutModule,
    EducationModule,
    ExperienceModule,
    ProjectsModule,
    ContactModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
