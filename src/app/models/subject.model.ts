 export interface SubjectsResponse {
    data: Subject[];
    status: string;
    message: string;
  }

  export interface Subject {
    id_subject: number;
    name: string;
  }
  