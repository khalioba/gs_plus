export interface Class {
    id_class: number;
    class_name: string;
    student_count: number;
    school_year: number;
}

export interface ClassResponse {
    status: string;
    message: string;
    data: Class[];
}