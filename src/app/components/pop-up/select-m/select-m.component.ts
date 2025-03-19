import { Component, Input } from '@angular/core';
import { Class } from '../../../models/classes';
import { Subject } from '../../../models/matier';
import { ServeEService } from '../../../services/serve-e.service';

@Component({
  selector: 'app-select-m',
  standalone: false,
  
  templateUrl: './select-m.component.html',
  styleUrl: './select-m.component.scss'
})
export class SelectMComponent {
  constructor(private classSubjectsService: ServeEService) {}
  @Input() discipline!: string;
  @Input() classe!: Class;
    visible: boolean = false;
  
      showDialog() {
          this.visible = true;
  }
  
   // Getter pour récupérer l'id de la classe
   get classId(): string {
    return this.classe?.id_class?.toString() || ''; 
  }

  subjects: Subject[] = [];

  getSubjects(): void {
    this.classSubjectsService.getClassSubjects(this.classId).subscribe(response => {
      this.subjects = response.subjects;
    });
  }

}
