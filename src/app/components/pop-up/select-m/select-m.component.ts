import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-m',
  standalone: false,
  
  templateUrl: './select-m.component.html',
  styleUrl: './select-m.component.scss'
})
export class SelectMComponent {
    @Input() discipline!: string;
    visible: boolean = false;
  
      showDialog() {
          this.visible = true;
      }
}
