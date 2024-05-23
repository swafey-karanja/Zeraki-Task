// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
// import { ChartData, ChartOptions} from 'chart.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  collections: number;
  signups: { analytics: number, finance: number, timetable: number };
  totalRevenue: { analytics: number, finance: number, timetable: number };
  bouncedCheques: number;


  constructor(private router: Router) {
    // Fetch data from a service or mock data for demonstration purposes
    this.collections = 1200;
    this.signups = { analytics: 150, finance: 200, timetable: 100 };
    this.totalRevenue = { analytics: 30000, finance: 35000, timetable: 10000 };
    this.bouncedCheques = 20;

  }

  navigateToUpcomingInvoices() {
    this.router.navigate(['/upcoming-invoices']);
  }


  ngOnInit() {
    // Fetch data from a service or perform any other initialization logic
  }
}
