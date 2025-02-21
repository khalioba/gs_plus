import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false
})
export class HeaderComponent {
    admin: any;

    constructor(private authService: AuthService) {}
  
    ngOnInit() {
      this.admin = this.authService.getUser(); // Récupère l'utilisateur au chargement
    }
  
    logout() {
      this.authService.logout();
    }
}
