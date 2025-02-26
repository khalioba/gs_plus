export interface Student {
    id_student: number;
    first_name: string;
    last_name: string;
    phone: string;
    birth_date: string;
    class_name: string;
}

export interface Note {
    id_note: number;
    subject_name: string;
    homework: number;
    workontable: number;
    exam: number;
    moy_g: number;
    coefficient: number;
    appreciation: string;
}

export interface NotesByTerm {
    [term: string]: Note[];
}

export interface StudentResponse {
    status: string;
    student: Student;
    notes: NotesByTerm;
}