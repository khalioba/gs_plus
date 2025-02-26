import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-chart-a',
  standalone: false,
  
  templateUrl: './chart-a.component.html',
  styleUrl: './chart-a.component.scss'
})
export class ChartAComponent {

  data: { labels: string[]; datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; } | undefined;

  options: { cutout: string; plugins: { legend: { labels: { color: string; }; }; }; } | undefined;

  ngAfterViewInit() {
    let textColor = '#000000'; 
    let blue500 = '#007bff';

    this.data = {
      labels: ['cp1','cp2','ce1','ce2','cm1','cp2','6eme', '5eme', '4eme', '3eme'],
      datasets: [
        {
          data: [38, 31, 26, 49, 5, 13, 25,6, 23, 65],
          backgroundColor: [blue500],
          hoverBackgroundColor: [blue500],
        },
      ],
    };
  }


}
