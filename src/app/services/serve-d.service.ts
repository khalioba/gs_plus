import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { StudentResponse } from '../models/student';
import { AuthService } from './auth.service';
import { ProfResponse } from '../models/prof.model';
import { ClassResponse } from '../models/classes';
import { SubjectsResponse } from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class ServeDService {

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

   // Charger les étudiants par classe
    loadprof(): Observable<ProfResponse> {
      const url = `${this.apiUrl}get/teachers.php`;
      return this.http.get<ProfResponse>(url);
    }

    loadprofbyid(id: number): Observable<ProfResponse> {
      const url = `${this.apiUrl}get/teacher.php?id_teacher=${id}`;
      return this.http.get<ProfResponse>(url);
    }


    
    addTeacher(teacherData: any): Observable<any> {
      const formData = new FormData();
      formData.append('first_name', teacherData.first_name);
      formData.append('last_name', teacherData.last_name);
      formData.append('phone', teacherData.phone);
      formData.append('id_school', teacherData.id_school);
      formData.append('year', teacherData.year);
  
      return this.http.post(`${this.apiUrl}post/teachers.php`, formData);
    }

    addClassSubject(classSubjectData: any): Observable<any> {
      const formData = new FormData();
      formData.append('id_class', classSubjectData.id_class);
      formData.append('id_subject', classSubjectData.id_subject);
      formData.append('coefficient', classSubjectData.coefficient);
      formData.append('id_school', classSubjectData.id_school);
      formData.append('id_teacher', classSubjectData.id_teacher);
    
      return this.http.post(`${this.apiUrl}post/class_subjects.php`, formData);
    }

    getClasses(idSchool: number, id_year: number) {
        return this.http.get<ClassResponse>(`${this.apiUrl}get/classe.php?id_school=${idSchool}&school_year=${id_year}`);
      }

    getSubject(): Observable<SubjectsResponse> {
      const url = `${this.apiUrl}get/subjects.php`;
      return this.http.get<SubjectsResponse>(url);
    }
    
}
