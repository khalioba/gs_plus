import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-classes',
  templateUrl: './detail-classes.component.html',
  styleUrl: './detail-classes.component.scss'
})
export class DetailClassesComponent {
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
      rang: 6,
      name: 'James',
      Prenom: 'davive',
      class: '5 eme'
    },
    {
      rang: 7,
      name: 'James',
      Prenom: 'davive',
      class: '5 eme'
    },
    
  ];
}
