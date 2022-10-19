import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlanComponent } from './plan/plan.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    PlanComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ]
})
export class ProtectedModule { }
