export interface Subject {
    id_subject: number;
    subject_name: string;
    coefficient: number;
  }
  
  export interface ClassSubjectsResponse {
    status: string;
    class_id: string;
    subjects: Subject[];
  }