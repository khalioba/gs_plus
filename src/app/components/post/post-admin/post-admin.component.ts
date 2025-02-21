import { Component } from '@angular/core';

@Component({
  selector: 'app-post-admin',
  standalone: false,
  
  templateUrl: './post-admin.component.html',
  styleUrl: './post-admin.component.scss'
})
export class PostAdminComponent {
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
