import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    standalone: false
})
export class LoginComponent {
    phone = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.phone, this.password).subscribe(
      (response) => {
        if (response.status === 'success') {
          this.router.navigate(['']); // Redirige après connexion
        } else {
          this.errorMessage = 'Identifiants incorrects';
          console.log(response);
          
        }
      },
      (error) => {
        this.errorMessage = 'Erreur de connexion';
      }
    );
  }
}
