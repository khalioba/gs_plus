import { Component } from '@angular/core';
import { ClassResponse } from '../../models/classes';
import { ServeAService } from '../../services/serve-a.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-all-t-n',
  standalone: false,
  
  templateUrl: './all-t-n.component.html',
  styleUrl: './all-t-n.component.scss'
})
export class AllTNComponent {
  classes: ClassResponse | null = null;
  
  constructor(private serveAService: ServeAService) { }

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
