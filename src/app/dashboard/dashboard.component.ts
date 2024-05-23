// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions} from 'chart.js';

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

  // Targets and achieved data for pie charts
  analyticsPieData: ChartData;
  financePieData: ChartData;
  timetablePieData: ChartData;
  pieChartOptions: ChartOptions;

  // Sign-ups data for bar charts
  analyticsSignupsData: { primary: number, secondary: number, igcse: number };
  financeSignupsData: { primary: number, secondary: number, igcse: number };
  timetableSignupsData: { primary: number, secondary: number, igcse: number };
  barChartOptions: ChartOptions;

  upcomingInvoices: { school: string, amount: number, dueDate: Date }[];

  constructor() {
    // Fetch data from a service or mock data for demonstration purposes
    this.collections = 1200;
    this.signups = { analytics: 150, finance: 200, timetable: 100 };
    this.totalRevenue = { analytics: 30000, finance: 35000, timetable: 10000 };
    this.bouncedCheques = 20;

    // Mock data for pie charts
    this.analyticsPieData = {
      labels: ['Achieved', 'Target'],
      datasets: [{ data: [100, 200] }]
    };
    this.financePieData = {
      labels: ['Achieved', 'Target'],
      datasets: [{ data: [150, 300] }]
    };
    this.timetablePieData = {
      labels: ['Achieved', 'Target'],
      datasets: [{ data: [80, 150] }]
    };
    this.pieChartOptions = {
      // Pie chart options
    };

    // Mock data for bar charts
    this.analyticsSignupsData = { primary: 50, secondary: 70, igcse: 30 };
    this.financeSignupsData = { primary: 80, secondary: 90, igcse: 30 };
    this.timetableSignupsData = { primary: 40, secondary: 50, igcse: 10 };
    this.barChartOptions = {
      // Bar chart options
    };

    // Mock data for upcoming invoices
    this.upcomingInvoices = [
      { school: 'ABC School', amount: 5000, dueDate: new Date('2024-05-25') },
      { school: 'XYZ School', amount: 8000, dueDate: new Date('2024-05-28') },
      { school: 'PQR School', amount: 3500, dueDate: new Date('2024-06-01') }
    ];
  }

  ngOnInit() {
    // Fetch data from a service or perform any other initialization logic
  }
}
