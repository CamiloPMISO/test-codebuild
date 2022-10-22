import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProtectedRoutingModule } from './protected-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlanComponent } from './plan/plan.component';
import { ProtectedComponent } from './protected.component';
import { PostRegisterComponent } from './post-register/post-register.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    PlanComponent,
    ProtectedComponent,
    PostRegisterComponent
  ],
  imports: [CommonModule, ProtectedRoutingModule, MatStepperModule, ReactiveFormsModule],
})
export class ProtectedModule {}
