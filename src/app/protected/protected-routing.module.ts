import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanComponent } from './plan/plan.component';

// Routes for child Module (protectedModule). Since protected module is lazy loaded in in the 
// app-routing.module the full path is `/protected/dashboard`
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { 
        path: 'home', 
        component: PlanComponent 
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
