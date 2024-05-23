import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-signup-analytics',
  templateUrl: './signup-analytics.component.html',
  styleUrl: './signup-analytics.component.css'
})
export class SignupAnalyticsComponent {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [
          {
            label: "Primary",
            data: ["20", "31", "25", "16", "40"],
            backgroundColor: "rgba(255, 99, 132, 0.7)",
          },
          {
            label: "Secondary",
            data: ["30", "40", "10", "17", "35"],
            backgroundColor: "rgba(54, 162, 235, 0.7)",
          },
          {
            label: "IGCSE",
            data: ["2", "5", "10", "7", "15"],
            backgroundColor: "rgba(255, 205, 86, 0.7)",
          },

        ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: "Zeraki Sign-up Analytics and Sign-up Timetable",
            font: {
              size: 18,
              weight: 'bold',
            }
          },
          legend: {
            display: true,
            labels: {
              font: {
                size: 14,
              }
            }
          },
        },
        scales: {
          x: {
            grid: {
              display: false // Hide X-axis grid lines for cleaner look
            },
            ticks: {
              font: {
                size: 14
              }
            }
          },
          y: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', // Add a light grey color to Y-axis grid lines
            },
            ticks: {
              font: {
                size: 14
              },
            }
          }
        }
      }
    });
  }
}
