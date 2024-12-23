import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
