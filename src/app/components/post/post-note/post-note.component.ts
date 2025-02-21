import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-note',
  standalone: false,
  
  templateUrl: './post-note.component.html',
  styleUrl: './post-note.component.scss'
})
export class PostNoteComponent {
  @Input() discipline!: string;
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
