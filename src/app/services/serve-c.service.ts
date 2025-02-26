import { Injectable } from '@angular/core';
import { map, Observable, combineLatest, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { ClassResponse } from '../models/classes';

@Injectable({
  providedIn: 'root'
})
export class ServeCService {
  private apiUrl = environment.apiUrl;

  constructor(private authService: AuthService, private http: HttpClient) {}

  getIdSchool(): Observable<any> {
    return this.authService.user$.pipe(
      map((user: { id_school: any; }) => user ? user.id_school : null)
    );
  }

  getSchoolYear(): Observable<any> {
    return this.authService.user$.pipe(
      map((user: { id_year: any; }) => user ? user.id_year : null)
    );
  }

    loadStudents(idSchool: number, id_year: number) {
      return this.http.get<ClassResponse>(`${this.apiUrl}get/classe.php?id_school=${idSchool}&school_year=${id_year}`);
    }

  addStudent(formData: FormData): Observable<any> {
    // Récupérer id_school et id_year à partir des services d'authentification
    return combineLatest([
      this.getIdSchool(),
      this.getSchoolYear()
    ]).pipe(
      map(([idSchool, idYear]) => {
        if (idSchool && idYear) {
          // Ajouter ces informations dans le formData
          formData.append('id_school', idSchool);
          formData.append('id_year', idYear);
        }
        return formData;
      }),
      switchMap((updatedFormData) => {
        const url = 'https://elonga-event.top/test/api/api/post/new_student.php';
        return this.http.post(url, updatedFormData);
      })
    );
  }

}
