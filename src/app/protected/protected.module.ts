import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { RisksComponent } from './risks/risks.component';
import { RiskdboardComponent } from './risks/riskdboard/riskdboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    RisksComponent,
    RiskdboardComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
