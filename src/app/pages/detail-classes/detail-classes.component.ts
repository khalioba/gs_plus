import { Component } from '@angular/core';
import { ServeAService } from '../../services/serve-a.service';
import { Student } from '../../models/student';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'app-detail-classes',
    templateUrl: './detail-classes.component.html',
    styleUrl: './detail-classes.component.scss',
    standalone: false
})
export class DetailClassesComponent {


  students: Student[] = [];
  

  constructor(private serveAService: ServeAService,
    private route: ActivatedRoute, 
    private router: Router ) {}

  ngOnInit(): void {
    const idClass = +this.route.snapshot.paramMap.get('id')!; 

    // Récupération de l'ID de l'école depuis le service (authService)
    combineLatest([
      this.serveAService.getIdSchool(),
      this.serveAService.getschool_year_name()
    ]).subscribe(([idSchool, schoolYearData]) => {
      if (idSchool && schoolYearData && schoolYearData.id_year) {
        const schoolYear = Number(schoolYearData.id_year);
  
        this.serveAService.loadStudentsByClass(idSchool, schoolYear, idClass).subscribe(response => {
          if (response.status === 'success') {
            this.students = response.students;
            console.log(this.students);
          } else {
            console.error('Erreur dans la réponse : ', response);
          }
        }, error => {
          console.error('Erreur lors de la récupération des élèves : ', error);
        });
      } else {
        console.error('Ecole ou année scolaire manquante');
      }
    });
  }
}

// import { Component } from '@angular/core';
// import { ServeAService } from '../../services/serve-a.service';
// import { Student } from '../../models/student';
// import { ActivatedRoute, Router } from '@angular/router';
// import { combineLatest } from 'rxjs';

// @Component({
//     selector: 'app-detail-classes',
//     templateUrl: './detail-classes.component.html',
//     styleUrl: './detail-classes.component.scss',
//     standalone: false
// })
// export class DetailClassesComponent {


//   students: Student[] = [];
//   schoolYear: string = '2020-2025'; // Année scolaire

//   constructor(private serveAService: ServeAService,
//     private route: ActivatedRoute, 
//     private router: Router ) {}

// ngOnInit(): void {
//     // Récupération de l'ID de l'école et de l'année scolaire depuis les services
//     combineLatest([
//       this.serveAService.getIdSchool(),
//       this.serveAService.getschool_year_name()
//     ]).subscribe(([idSchool, schoolYearData]) => {
//       if (idSchool && schoolYearData && schoolYearData.id_year) {
//         const schoolYear = Number(schoolYearData.id_year);
  
//         // Appel de la méthode loadStudents avec les paramètres
//         this.serveAService.loadStudentsByClass(idSchool, schoolYear, idClass).subscribe((data: ClassResponse) => {
//           this.students = data;
//           // console.log(this.students);
//         });
//       } else {
//         console.error('L\'ID de l\'école ou l\'année scolaire est manquant');
//       }
//     });
//   }
// }