import { Component } from '@angular/core';
import { ServeDService } from '../../services/serve-d.service';
import { ProfResponse } from '../../models/prof.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-admin-p',
  standalone: false,
  
  templateUrl: './detail-admin-p.component.html',
  styleUrl: './detail-admin-p.component.scss'
})
export class DetailAdminPComponent {

  prof!: any;
  
      constructor(private serveBService: ServeDService,
        private route: ActivatedRoute, 
        private router: Router ) {}

        
 ngOnInit(): void {
    const StudentId = +this.route.snapshot.paramMap.get('id')!;
    
        // Appel au service pour récupérer les détails de
        this.serveBService.loadprofbyid(StudentId).subscribe(
          (data: ProfResponse) => {
            this.prof = data;
            console.log(this.prof);
            
          },
          (error) => {
            console.error('Erreur lors de la récupération des informations de l\'entreprise', error);
          }
        );
        }
}
