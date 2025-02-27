import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServeDService } from '../../../services/serve-d.service';

@Component({
  selector: 'app-post-admin',
  standalone: false,
  
  templateUrl: './post-admin.component.html',
  styleUrl: './post-admin.component.scss'
})
export class PostAdminComponent {
  visible: boolean = false;

  activeStep: number = 0; // Étape active
  

  showDialog(): void {
    this.visible = true;
  }

  teacherForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  idSchool!: number;
  schoolYear!: number;

  constructor(private fb: FormBuilder, private teacherService: ServeDService) {
    this.teacherForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Récupérer id_school et year au chargement du composant
    this.teacherService.getIdSchool().subscribe(id => this.idSchool = id);
    this.teacherService.getSchoolYear().subscribe(year => this.schoolYear = year);
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      const teacherData = {
        ...this.teacherForm.value,
        id_school: this.idSchool,
        year: this.schoolYear
      };

      this.teacherService.addTeacher(teacherData).subscribe({
        next: () => {
          this.successMessage = 'Enseignant ajouté avec succès!';
          this.errorMessage = '';
          this.teacherForm.reset();
        },
        error: (error) => {
          this.errorMessage = 'Erreur lors de l’ajout de l’enseignant';
          this.successMessage = '';
          console.error(error);
        }
      });
    }
  }
}
