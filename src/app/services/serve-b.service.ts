import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { StudentResponse } from '../models/students.model';

@Injectable({
  providedIn: 'root'
})
export class ServeBService {
  private apiUrl = environment.apiUrl;

  constructor(private authService: AuthService, private http: HttpClient) {}

  // Méthode pour récupérer l'ID de l'école depuis l'utilisateur connecté
  
  getIdSchool() {
    return this.authService.user$.pipe(
      // Extraction de l'ID de l'école depuis l'utilisateur connecté
      map((user: { id_school: any; }) => user ? user.id_school : null)  // Retourne null si l'utilisateur n'est pas défini
    );
  }

  getschool_year_name() {
    return this.authService.user$.pipe(
      map((user: {  id_year: any; }) => 
        user ? { id_year: user.id_year } : null
      )
    );
  }

  Students(id: number) {
    return this.http.get<StudentResponse>(`${this.apiUrl}get/student.php?id_student=${id}`);
  }

  updateNote(data: { id_note: number; moy_de_c: string; moy_de_com: string }): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('id_note', data.id_note.toString());
    formData.append('moy_de_c', data.moy_de_c);
    formData.append('moy_de_com', data.moy_de_com);
  
    return this.http.post(`${this.apiUrl}update/note.php`, formData);
  }
  
}
