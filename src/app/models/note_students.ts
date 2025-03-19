export interface Note {
    id_note: number;
    subject_name: string;
    coefficient: number;
    term: number;
    homework: number;
    workontable: number;
    exam: number;
    general_average: number;
    appreciations: string;
  }
  
  export interface Student {
    id_student: number;
    first_name: string;
    last_name: string;
    phone: string;
    birth_date: string;
    class_name: string;
    school_year: string;
    notes: Note[];
  }
  
  export interface ClassData {
    status: string;
    classe: string;
    year: string;
    school: string;
    students: Student[];
  }
  