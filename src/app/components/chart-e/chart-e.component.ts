import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-e',
  standalone: false,
  
  templateUrl: './chart-e.component.html',
  styleUrl: './chart-e.component.scss'
})
export class ChartEComponent {
  data: { labels: string[]; datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; } | undefined;

  options: { cutout: string; plugins: { legend: { labels: { color: string; }; }; }; } | undefined;

  ngAfterViewInit() {
    let textColor = '#000000'; 
    let blue500 = '#d60000';

    this.data = {
      labels: ['cp1','cp2','ce1','ce2','cm1','cp2','6eme', '5eme', '4eme', '3eme'],
      datasets: [
        {
          data: [8, 1, 6, 4, 18, 3, 2,1, 0, 12],
          backgroundColor: [blue500],
          hoverBackgroundColor: [blue500],
        },
      ],
    };
  }
}
