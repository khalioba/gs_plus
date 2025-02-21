import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Vérification de l'authentification
  if (authService.isAuthenticated()) {
    return true; // Si l'utilisateur est authentifié, autorise l'accès
  } else {
    router.navigate(['/login']); // Si l'utilisateur n'est pas authentifié, le redirige vers login
    return false; // Refuse l'accès à la route
  }
};
