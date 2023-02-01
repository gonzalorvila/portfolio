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
          import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
        pathMatch: 'full',
      },
      {
        path: 'about',
        redirectTo: '',
      },
      {
        path: 'education',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
        pathMatch: 'full',
      },
      {
        path: 'experience',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
        pathMatch: 'full',
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
        pathMatch: 'full',
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
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
