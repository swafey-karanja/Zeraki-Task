import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-signup-finances',
  templateUrl: './signup-finances.component.html',
  styleUrl: './signup-finances.component.css'
})
export class SignupFinancesComponent {


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
            data: ["200000", "310000", "250000", "160000", "400000"],
            backgroundColor: "rgba(255, 99, 132, 0.7)",
          },
          {
            label: "Secondary",
            data: ["300000", "400000", "100000", "170000", "350000"],
            backgroundColor: "rgba(54, 162, 235, 0.7)",
          },
          {
            label: "IGCSE",
            data: ["20000", "50000", "100000", "70000", "150000"],
            backgroundColor: "rgba(255, 205, 86, 0.7)",
          },

        ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: "Zeraki Sign-up Finances",
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
