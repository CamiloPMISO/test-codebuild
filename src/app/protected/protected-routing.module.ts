import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanComponent } from './plan/plan.component';
import { ProtectedComponent } from './protected.component';

// Routes for child Module (protectedModule). Since protected module is lazy loaded in in the 
// app-routing.module the full path is `/protected/dashboard`
const routes: Routes = [
  {
    path: '',
    component: ProtectedComponent,
    children: [
      { 
        path: 'planes', 
        component: PlanComponent 
      },
      { 
        path: 'dashboard', 
        component: DashboardComponent 
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
