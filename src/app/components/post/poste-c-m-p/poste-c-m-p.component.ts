import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServeDService } from '../../../services/serve-d.service';
import { ServeAService } from '../../../services/serve-a.service';

@Component({
  selector: 'app-poste-c-m-p',
  standalone: false,
  templateUrl: './poste-c-m-p.component.html',
  styleUrl: './poste-c-m-p.component.scss'
})
export class PosteCMPComponent {
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

  @Input() year!: number;
  @Input() idSchool!: number;
  classSubjectForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  classes: any[] = [];
  teachers: any[] = [];
  subjucts: any[] = [];

  constructor(
    private fb: FormBuilder, 
    private serveDService: ServeDService,
    private serveAService: ServeAService
  ) {
    this.classSubjectForm = this.fb.group({
      id_class: ['', Validators.required],
      id_subject: ['', Validators.required],
      coefficient: ['', [Validators.required, Validators.min(1)]],
      id_teacher: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.serveDService.getIdSchool().subscribe(id => {
      this.idSchool = id;
      this.loadData(); // Charger les données quand idSchool est prêt
    });

    this.serveDService.getSchoolYear().subscribe(year => {
      this.year = year;
      this.loadData(); // Charger les données quand year est prêt
    });

    this.serveDService.loadprof().subscribe(response => {
      console.log('Enseignants reçus:', response);
      this.teachers = response.data || [];
    });

    this.serveDService.getSubject().subscribe(response => {
      console.log('matiere reçus:', response);
      this.subjucts = response.data || [];
    });
  }

  

  loadData() {
    if (this.idSchool && this.year) {
      this.serveAService.loadStudents(this.idSchool, this.year).subscribe(response => {
        console.log('Classes reçues:', response);
        this.classes = response.data || []; // Assurer que c'est un tableau
      });
    }
  }

  onSubmit() {
    if (this.classSubjectForm.valid) {
      const classSubjectData = {
        ...this.classSubjectForm.value,
        id_school: this.idSchool
      };

      this.serveDService.addClassSubject(classSubjectData).subscribe({
        next: () => {
          this.successMessage = 'Matière ajoutée à la classe avec succès!';
          this.errorMessage = '';
          this.classSubjectForm.reset();
        },
        error: (error) => {
          this.errorMessage = 'Erreur lors de l’ajout de la matière à la classe';
          this.successMessage = '';
          console.error(error);
        }
      });
    }
  }
}
