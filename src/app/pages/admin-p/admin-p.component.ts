import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-p',
  standalone: false,
  
  templateUrl: './admin-p.component.html',
  styleUrl: './admin-p.component.scss'
})
export class AdminPComponent {
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
