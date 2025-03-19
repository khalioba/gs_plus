import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassSubjectsResponse } from '../models/matier';

@Injectable({
  providedIn: 'root'
})
export class ServeEService {
  private apiUrl = environment.apiUrl;
   
  constructor(private authService: AuthService, private http: HttpClient) { }
  
  getClassSubjects(classId: string): Observable<ClassSubjectsResponse> {
    return this.http.get<ClassSubjectsResponse>(`${this.apiUrl}/get/matier_class.php?id_class=${classId}`);
  }

  getStudentSubject(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/student_cl_sub_tri.php?id_school=1&school_year=1&id_class=2&id_subject=2`);
  }
  
  // getStudentSubject(classId: number, idSchool: number, id_year: number, subjectId: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/get/student_cl_sub_tri.php?id_school=1&school_year=1&id_class=2&id_subject=2${classId}`);
  // }
}
