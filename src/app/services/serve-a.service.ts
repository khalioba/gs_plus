import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ClassResponse } from '../models/classes';
import { map, Observable } from 'rxjs';
import { StudentResponse } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class ServeAService {
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

  loadStudents(idSchool: number, id_year: number) {
    return this.http.get<ClassResponse>(`${this.apiUrl}get/classe.php?id_school=${idSchool}&school_year=${id_year}`);
  }

  // Charger les étudiants par classe
  loadStudentsByClass(idSchool: number, id_year: number, idClass: number): Observable<StudentResponse> {
    const url = `${this.apiUrl}get/student_class.php?id_school=${idSchool}&school_year=${id_year}&id_class=${idClass}`;
    return this.http.get<StudentResponse>(url); // Utilisation du modèle StudentResponse
  }
 
}

