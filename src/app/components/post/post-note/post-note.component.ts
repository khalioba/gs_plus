import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ServeBService } from '../../../services/serve-b.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-note',
  standalone: false,
  
  templateUrl: './post-note.component.html',
  styleUrls: ['./post-note.component.scss'] // Correction de 'styleUrl' en 'styleUrls'
})
export class PostNoteComponent {
  @Input() discipline?: string; // Facultatif
  @Input() id?: number; // Facultatif
  @Input() homework: number = 0; // Valeur par défaut
  @Input() workontable: number = 0; // Valeur par défaut
  @Input() moy_de_devoir: number = 0; // Facultatif avec valeur par défaut

  visible: boolean = false;
  moyenneClasse: number = 0;
  moyenneComposition: number = 0;

  constructor(
    private serveBService: ServeBService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  showDialog() {
    this.visible = true;
    this.moyenneClasse = this.homework;
    this.moyenneComposition = this.workontable;
  }

  saveNote() {
    if (!this.id) {
      console.error('ID de la note manquant');
      return;
    }

    const data = {
      id_note: this.id,
      moy_de_c: this.moyenneClasse.toString(),
      moy_de_com: this.moyenneComposition.toString(),
      moy_de_devoir: this.moy_de_devoir.toString() // Ajout de 'devoir' dans les données
    };

    this.serveBService.updateNote(data).subscribe(
      (response) => {
        console.log('Note mise à jour avec succès', response);
        this.visible = false;
        // Recharger la page (rediriger vers la même route)
        this.router.navigate([this.router.url]).then(() => {
          window.location.reload(); // Cela va forcer le rechargement complet de la page
        });
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la note', error);
      }
    );
  }
}
