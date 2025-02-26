import { Component, Input } from '@angular/core';
import { Note } from '../../models/students.model';

@Component({
  selector: 'app-detail-notes',
  standalone: false,
  
  templateUrl: './detail-notes.component.html',
  styleUrl: './detail-notes.component.scss'
})
export class DetailNotesComponent {
  @Input() nots: Note[] = [];
  @Input() t!: string; // Pour afficher le trimestre

  notets: [] =[]

//   ngOnInit(): void {
// this.notets= this.nots,
}
