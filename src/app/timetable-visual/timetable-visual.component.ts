import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-timetable-visual',
  templateUrl: './timetable-visual.component.html',
  styleUrl: './timetable-visual.component.css'
})
export class TimetableVisualComponent {
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chart = new Chart("MyChart", {
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
        aspectRatio: 3.5,
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
