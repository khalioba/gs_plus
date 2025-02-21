import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private userSubject = new BehaviorSubject<any>(null); // 🔥 Stockage réactif des infos user
  user$ = this.userSubject.asObservable(); // Observable pour écouter les changements

  constructor(private http: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject.next(JSON.parse(user)); // 🔥 Restaurer l'utilisateur si existant
    }
  }

  login(phone: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/admin.php?phone=${phone}&password=${password}`).pipe(
      tap(response => {
        if (response.status === 'success') {
          localStorage.setItem('user', JSON.stringify(response.data));
          this.userSubject.next(response.data); // 🔥 Met à jour l'utilisateur
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null); // 🔥 Réinitialise l'utilisateur
  }

  getUser(): any {
    return this.userSubject.value; // 🔥 Récupère les infos en temps réel
  }

  isAuthenticated(): boolean {
    return !!this.getUser();
  }
}
