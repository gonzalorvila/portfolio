import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutModule),
        pathMatch: 'full',
      },
      {
        path: 'about',
        redirectTo: '',
      },
      {
        path: 'education',
        loadChildren: () =>
          import('../education/education.module').then((m) => m.EducationModule),
        pathMatch: 'full',
      },
      {
        path: 'experience',
        loadChildren: () =>
          import('../experience/experience.module').then((m) => m.ExperienceModule),
        pathMatch: 'full',
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../projects/projects.module').then((m) => m.ProjectsModule),
        pathMatch: 'full',
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../contact/contact.module').then((m) => m.ContactModule),
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
