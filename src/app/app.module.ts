import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es-CO'
import { registerLocaleData } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlanComponent } from './plan/plan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeEs, 'es');

const routes: Routes = [
  {path: '', redirectTo: 'planes', pathMatch: 'full'},
  {path: 'planes', component: PlanComponent},
];

import { JwtModule } from '@auth0/angular-jwt';

export const LOCALSTORAGE_TOKEN_KEY = 'sport_app_token';

export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlanComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000', 'localhost:8080']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
