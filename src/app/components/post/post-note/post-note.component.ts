import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ServeBService } from '../../../services/serve-b.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-note',
  standalone: false,
  
  templateUrl: './post-note.component.html',
  styleUrl: './post-note.component.scss'
})
export class PostNoteComponent {
  @Input() discipline!: string;
  @Input() id!: number;
  @Input() homework!: number;  // La valeur à utiliser pour pré-remplir
  @Input() workontable!: number;  // Autre valeur à utiliser



  
  visible: boolean = false;
  moyenneClasse!: number ;
  moyenneComposition!: number ;
  constructor(private serveBService: ServeBService,
      private route: ActivatedRoute, 
      private router: Router ) {}

  showDialog() {
    this.visible = true;
    this.moyenneClasse = this.homework;
    this.moyenneComposition = this.workontable;
  }

  saveNote() {
    const data = {
      id_note: this.id,
      moy_de_c: this.moyenneClasse.toString(),
      moy_de_com: this.moyenneComposition.toString(),
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
