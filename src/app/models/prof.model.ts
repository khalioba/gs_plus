export interface Profs {
    teacher_id: number;
    first_name: string;
    last_name: string;
    phone: string;
    class_subject: ClassSubject[];

  }

  export interface ClassSubject{
    class_name: string,
    subject_name: string,
  }
  
  export interface ProfResponse {
    data: Profs[];
    status: string;
    message: string;
  }
  