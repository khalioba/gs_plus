import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  standalone: false,
  
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  data: { labels: string[]; datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; } | undefined;

  options: { cutout: string; plugins: { legend: { labels: { color: string; }; }; }; } | undefined;

  ngAfterViewInit() {
    let textColor = '#000000'; 
    let red = '#d60000';
    let blue = '#007bff';

    this.data = {
      labels: ['cp1','cp2','ce1','ce2','cm1','cp2','6eme', '5eme', '4eme', '3eme'],
      datasets: [
        {
          data: [20, 1, 6, 4, 18, 3, 2,1, 0, 12],
          backgroundColor: [red],
          hoverBackgroundColor: [red],
        }, {
          data: [38, 31, 26, 49, 5, 13, 25,6, 23, 65],
          backgroundColor: [blue],
          hoverBackgroundColor: [blue],
        },
      ],
    };
  }
}