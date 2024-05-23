import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-finance-visual',
  templateUrl: './finance-visual.component.html',
  styleUrl: './finance-visual.component.css'
})
export class FinanceVisualComponent {
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chart = new Chart("MyChart", {
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
        aspectRatio: 3.5,
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
}
