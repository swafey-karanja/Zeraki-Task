import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingInvoicesComponent } from './dashboard/upcoming-invoices/upcoming-invoices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupAnalyticsComponent } from './dashboard/signup-analytics/signup-analytics.component';
import { PiechartComponent } from './dashboard/targets-visualization/targets-visualization.component';
import { SchoolListComponent } from '../app/School-management/school-list/school-list.component';
import { SchoolDetailsComponent } from '../app/School-management/school-details/school-details.component';

const routes: Routes = [
  { path: 'upcoming-invoices', component: UpcomingInvoicesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signups-overview', component: SignupAnalyticsComponent },
  { path: 'targets-visualization', component: PiechartComponent },
  { path: '', redirectTo: '/schools', pathMatch: 'full' },
  { path: 'schools', component: SchoolListComponent },
  { path: 'schools/:id', component: SchoolDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
