import { Component } from '@angular/core';
import { ServeAService } from '../../services/serve-a.service';
import { ClassResponse } from '../../models/classes';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-all-n',
  standalone: false,
  
  templateUrl: './all-n.component.html',
  styleUrl: './all-n.component.scss'
})
export class AllNComponent {
 visible: boolean = false;
   classes: ClassResponse | null = null; // Initialisation avec null ou un objet vide {}
 
   constructor(private serveAService: ServeAService) {}
 
   showDialog() {
     this.visible = true;
   }
 
   ngOnInit(): void {
     // Récupération de l'ID de l'école et de l'année scolaire depuis les services
     combineLatest([
       this.serveAService.getIdSchool(),
       this.serveAService.getschool_year_name()
     ]).subscribe(([idSchool, schoolYearData]) => {
       if (idSchool && schoolYearData && schoolYearData.id_year) {
         const schoolYear = Number(schoolYearData.id_year);
   
         // Appel de la méthode loadStudents avec les paramètres
         this.serveAService.loadStudents(idSchool, schoolYear).subscribe((data: ClassResponse) => {
           this.classes = data;
           console.log(this.classes);
         });
       } else {
         console.error('L\'ID de l\'école ou l\'année scolaire est manquant');
       }
     });
   }
}
