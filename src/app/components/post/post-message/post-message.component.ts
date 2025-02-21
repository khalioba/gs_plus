import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-message',
  standalone: false,
  
  templateUrl: './post-message.component.html',
  styleUrl: './post-message.component.scss'
})
export class PostMessageComponent {
    visible: boolean = false;
  
      showDialog() {
          this.visible = true;
      }
}
