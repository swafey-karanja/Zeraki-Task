import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-piechart',
  templateUrl: './targets-visualization.component.html',
  styleUrls: ['./targets-visualization.component.css']
})
export class PiechartComponent {
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chart = new Chart("MyChart", {
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
        aspectRatio: 3.5,
        plugins: {
          title: {
            display: true,
            text: 'Zeraki Analytics',
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

                if (label === 'Achieved Sign-ups') {
                  customLabel = `${value.toLocaleString()} Schools signed-up so far this financial year`;
                } else if (label ===  'Remaining Sign-ups') {
                  customLabel = `${value.toLocaleString()} schools yet to sign up in order to achieve the target of 100 schools`;
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
