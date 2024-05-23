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
    this.createBar1();
    this.createBar2();
    // this.createBar3();
  }

  public bar1: any;
  public bar2: any;
  // public bar3: any;

  createBar1() {
    this.bar1 = new Chart("MyBar1", {
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
            display: true,
            title: {
              display: true,
              text: 'Year',
              font: {
                size: 16,
                weight: 600
              }
            },
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 14
              }
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Number of Sign-ups',
              font: {
                size: 16,
                weight: 600
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
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

  createBar2() {
    this.bar2 = new Chart("MyBar2", {
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
            display: true,
            title: {
              display: true,
              text: 'Year',
              font: {
                size: 16,
                weight: 600
              }
            },
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 14
              }
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Income Made',
              font: {
                size: 16,
                weight: 600
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
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
