// student.model.ts

export interface Student {
  id_student: number;
  first_name: string;
  last_name: string;
  phone: string;
  birth_date: string;
  class_name: string;
}

export interface StudentResponse {
  status: string;
  classe: string;
  year: number;
  school: number;
  students: Student[];
}
