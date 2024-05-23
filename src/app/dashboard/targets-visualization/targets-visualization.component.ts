import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-piechart',
  templateUrl: './targets-visualization.component.html',
  styleUrls: ['./targets-visualization.component.css']
})
export class PiechartComponent implements OnInit {
  public chart1: any;
  public chart2: any;
  public chart3: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart1();
    this.createChart2();
    this.createChart3();
  }

  createChart1() {
    this.chart1 = new Chart("MyChart1", {
      type: 'pie',
      data: {
        labels: ['Achieved Sign-ups', 'Remaining Sign-ups'],
        datasets: [{
          data: [72, 28],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 2.5, // Adjust the aspect ratio to control the chart size
        plugins: {
          title: {
            display: true,
            text: 'Sign-ups',
            font: {
              size: 18,
              weight: 'bold',
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            },
            padding: {
              top: 10,
              bottom: 30
            }
          },
          // Other options...
        }
      }
    });
  }

  createChart2() {
    this.chart2 = new Chart("MyChart2", {
      type: 'pie',
      data: {
        labels: ['Total income', 'Remaining income'],
        datasets: [{
          data: [134, 26],
          backgroundColor: [
            'green',
            'orange'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: 'Zeraki Finance',
            font: {
              size: 24,
              weight: 'bold',
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            },
            padding: {
              top: 10,
              bottom: 30,
            }
          },
          legend: {
            display: true,
            labels: {
              font: {
                weight: 500,
                size: 14,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label;
                const value = context.parsed;
                let customLabel;

                if (label === 'Total income') {
                  customLabel = `Ksh.${value.toLocaleString()} million earned so far this financial year`;
                } else if (label === 'Remaining income') {
                  customLabel = `Ksh.${value.toLocaleString()} million remaining in order to achieve the target of 150 million`;
                }

                return customLabel;
              }
            }
          }
        }
      }
    });
  }

  createChart3() {
    this.chart3 = new Chart("MyChart3", {
      type: 'pie',
      data: {
        labels: ['Time Elapsed', 'Remaining Time'],
        datasets: [{
          data: [7, 5],
          backgroundColor: [
            'brown',
            'violet'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 4.5,
        plugins: {
          title: {
            display: true,
            text: 'Zeraki Timetable',
            font: {
              size: 24,
              weight: 'bold',
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            },
            padding: {
              top: 10,
              bottom: 30
            }
          },
          legend: {
            display: true,
            labels: {
              font: {
                weight: 500,
                size: 14,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label;
                const value = context.parsed;
                let customLabel;

                if (label === 'Time Elapsed') {
                  customLabel = `${value.toLocaleString()} months elapsed so far this financial year`;
                } else if (label === 'Remaining Time') {
                  customLabel = `${value.toLocaleString()} months remaining this financial year`;
                }

                return customLabel;
              }
            }
          }
        }
      }
    });
  }
}




