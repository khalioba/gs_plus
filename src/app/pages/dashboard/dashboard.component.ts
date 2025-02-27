import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    standalone: false
})
export class DashboardComponent {
  @ViewChild('dt2') dt2!: Table;
  
  eleves = [
    {
      rang: 1,
      name: 'James',
      Prenom: 'davive',
      class: '6 eme'
    },
    {
      rang: 2,
      name: 'ades',
      Prenom: 'vive',
      class: '3 eme'
    },
    {
      rang: 3,
      name: 'vanessa',
      Prenom: 'itive',
      class: 'cm2'
    },
    {
      rang: 4,
      name: 'James',
      Prenom: 'davive',
      class: '5 eme'
    },
    {
      rang: 5,
      name: 'James',
      Prenom: 'davive',
      class: '5 eme'
    }
    
  ];

  first = 0;

  data: any = {};
  options: any = {};
loading: unknown;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    let textColor = '#000000'; // Valeur par défaut
    let blue500 = '#007bff';
    let yellow500 = '#ffc107';
    let green500 = '#28a745';
    let blue400 = '#66b2ff';
    let yellow400 = '#ffdd57';
    let green400 = '#62d48c';

    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      textColor = documentStyle.getPropertyValue('--text-color') || textColor;
      blue500 = documentStyle.getPropertyValue('--blue-500') || blue500;
      yellow500 = documentStyle.getPropertyValue('--yellow-500') || yellow500;
      green500 = documentStyle.getPropertyValue('--green-500') || green500;
      blue400 = documentStyle.getPropertyValue('--blue-400') || blue400;
      yellow400 = documentStyle.getPropertyValue('--yellow-400') || yellow400;
      green400 = documentStyle.getPropertyValue('--green-400') || green400;
    }

    this.data = {
      labels: ['Admie', 'Echoe'],
      datasets: [
        {
          data: [300, 200],
          backgroundColor: [blue500, yellow500, green500],
          hoverBackgroundColor: [blue400, yellow400, green400],
        },
      ],
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }


  filterGlobal(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.dt2.filterGlobal(input.value, field); 
    }
  }
}
