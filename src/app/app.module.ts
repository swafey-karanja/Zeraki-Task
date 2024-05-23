import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BaseChartDirective   } from 'ng2-charts';
import { OrderByPipe } from './dashboard/upcoming-invoices/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatButtonModule } from '@angular/material/button'; // Import Angular Material button module
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatListModule } from '@angular/material/list'; // Import MatListModule
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PiechartComponent } from './dashboard/targets-visualization/targets-visualization.component';
import { SignupAnalyticsComponent } from './dashboard/signup-analytics/signup-analytics.component';
import { UpcomingInvoicesComponent } from './dashboard/upcoming-invoices/upcoming-invoices.component';
import { PaymentModalComponent } from './dashboard/upcoming-invoices/payment-modal/payment-modal.component';
import { SchoolListComponent } from './School-management/school-list/school-list.component';
import { SchoolDetailsComponent } from './School-management/school-details/school-details.component';


@NgModule({
  declarations: [

    DashboardComponent,
    PiechartComponent,
    SignupAnalyticsComponent,
    UpcomingInvoicesComponent,
    OrderByPipe,
    PaymentModalComponent,
    SchoolListComponent,
    SchoolDetailsComponent,

  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    MatButtonModule,// Add Angular Material button module
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule.forRoot([]),
    BaseChartDirective,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables())
  ],
 
})
export class AppModule {
  ngDoBootstrap() {
    bootstrapApplication(AppComponent);
  }
 }
