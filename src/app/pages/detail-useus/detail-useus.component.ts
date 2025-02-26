import { Component } from '@angular/core';
import { ServeBService } from '../../services/serve-b.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentResponse } from '../../models/students.model';

@Component({
  selector: 'app-detail-useus',
  standalone: false,
  templateUrl: './detail-useus.component.html',
  styleUrl: './detail-useus.component.scss'
})
export class DetailUseusComponent {
  Students!: StudentResponse;

    constructor(private serveBService: ServeBService,
      private route: ActivatedRoute, 
      private router: Router ) {}

  ngOnInit(): void {
    const StudentId = +this.route.snapshot.paramMap.get('id')!;
    
        // Appel au service pour récupérer les détails de
        this.serveBService.Students(StudentId).subscribe(
          (data: StudentResponse) => {
            this.Students = data;
            console.log(this.Students);
            
          },
          (error) => {
            console.error('Erreur lors de la récupération des informations de l\'entreprise', error);
          }
        );
        }
}
