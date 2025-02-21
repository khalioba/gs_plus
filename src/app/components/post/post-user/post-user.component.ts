import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-user',
  standalone: false,
  
  templateUrl: './post-user.component.html',
  styleUrl: './post-user.component.scss'
})
export class PostUserComponent {
  visible: boolean = false;

  activeStep: number = 0; // Étape active
  steps: any[] = []; // Modèle pour les étapes du formulaire

  eleveData: any = {
    nom: '',
    prenom: '',
    photo: null,
    adresseActuelle: '',
    dateNaissance: '',
    lieuNaissance: '',
    genre: '',
    telephone: '',
    email: '',
    classe: '',
    nomPere: '',
    telPere: '',
    nomMere: '',
    telMere: '',
  };

  constructor() {
    this.steps = [
      { label: '' },
      { label: '' },
      { label: '' },
    ];
  }

  showDialog(): void {
    this.visible = true;
  }

  saveEleve(): void {
    console.log('Données de l’élève enregistrées :', this.eleveData);
    this.visible = false;
  }
}