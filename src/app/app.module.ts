import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BaseChartDirective   } from 'ng2-charts';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatButtonModule } from '@angular/material/button'; // Import Angular Material button module
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatListModule } from '@angular/material/list'; // Import MatListModule
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PiechartComponent } from './targets-visualization/targets-visualization.component';
import { FinanceVisualComponent } from './finance-visual/finance-visual.component';
import { TimetableVisualComponent } from './timetable-visual/timetable-visual.component';
import { SignupAnalyticsComponent } from './signup-analytics/signup-analytics.component';
import { SignupFinancesComponent } from './signup-finances/signup-finances.component';
import { SignupTimelinesComponent } from './signup-timelines/signup-timelines.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PiechartComponent,
    FinanceVisualComponent,
    TimetableVisualComponent,
    SignupAnalyticsComponent,
    SignupFinancesComponent,
    SignupTimelinesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    MatButtonModule,// Add Angular Material button module
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    BaseChartDirective
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
