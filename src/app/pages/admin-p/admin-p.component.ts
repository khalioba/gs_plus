import { Component } from '@angular/core';
import { ServeDService } from '../../services/serve-d.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profs } from '../../models/prof.model';

@Component({
  selector: 'app-admin-p',
  standalone: false,
  
  templateUrl: './admin-p.component.html',
  styleUrl: './admin-p.component.scss'
})
export class AdminPComponent {

  prof: Profs[] = [];
  constructor(private serveAService: ServeDService,
      private route: ActivatedRoute, 
      private router: Router ) {}

      
      ngOnInit(): void {
  this.serveAService.loadprof().subscribe(response => {
    if (response.status === 'success') {
      this.prof = response.data;
      console.log(this.prof);
      console.log(response);
    } else {
      console.error('Erreur dans la réponse : ', response);
    }
  }, error => {
    console.error('Erreur lors de la récupération des élèves : ', error);
  });
}
}
