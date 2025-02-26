import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServeCService } from '../../../services/serve-c.service';
import { AuthService } from '../../../services/auth.service';
import { ServeAService } from '../../../services/serve-a.service';
import { ClassResponse } from '../../../models/classes';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-post-u',
  standalone: false,
  templateUrl: './post-u.component.html',
  styleUrls: ['./post-u.component.scss']
})
export class PostUComponent implements OnInit {
classes: any | null = null;
  visible: boolean = false;
  studentForm!: FormGroup;
  selectedFile: File | null = null;
  idSchool: string = ''; // Variable pour stocker l'ID de l'école
  schoolYear: string = ''; // Variable pour stocker l'année scolaire

  genderOptions = [
    { label: 'Homme', value: 'M' },
    { label: 'Femme', value: 'F' }
  ];

  // classOptions = [
  //   { classId: 1, className: 'Classe A' },
  //   { classId: 2, className: 'Classe B' }
  // ];

  constructor(
    private fb: FormBuilder,
    private studentService: ServeCService,
    private authService: AuthService,
    private serveAService: ServeAService 
  ) {}

  ngOnInit(): void {

    // combineLatest([
    //       this.serveAService.getIdSchool(),
    //       this.serveAService.getschool_year_name()
    //     ]).subscribe(([idSchool, schoolYearData]) => {
    //       if (idSchool && schoolYearData && schoolYearData.id_year) {
    //         const schoolYear = Number(schoolYearData.id_year);
      
    //         // Appel de la méthode loadStudents avec les paramètres
    //         this.serveAService.loadStudents(idSchool, schoolYear).subscribe((data: ClassResponse) => {
    //           this.classes = data;
    //           console.log(this.classes);
    //         });
    //       } else {
    //         console.error('L\'ID de l\'école ou l\'année scolaire est manquant');
    //       }
    //     });

    combineLatest([
      this.serveAService.getIdSchool(),
      this.serveAService.getschool_year_name()
    ]).subscribe(([idSchool, schoolYearData]) => {
      if (idSchool && schoolYearData && schoolYearData.id_year) {
        const schoolYear = Number(schoolYearData.id_year);

        this.serveAService.loadStudents(idSchool, schoolYear).subscribe((response: any) => {
          // Si la réponse contient une propriété `data`, nous assignons ce tableau à `classes`
          this.classes = response.data;  // Accéder directement au tableau de classes
          console.log(this.classes);  // Affichez les classes pour vérifier
        });
      } else {
        console.error('L\'ID de l\'école ou l\'année scolaire est manquant');
      }
    });
        
    // Initialisation du formulaire avec des validations de base
    this.studentForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      birth_date: ['', Validators.required],
      lieu_naissance: ['', Validators.required],
      genre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse_actuelle: ['', Validators.required],
      id_class: ['', Validators.required],
      id_school: ['', Validators.required],  // id_school sera assigné dynamiquement
      nom_pere: ['', Validators.required],
      tel_pere: ['', Validators.required],
      nom_mere: ['', Validators.required],
      tel_mere: ['', Validators.required],
      photo: [null, Validators.required], // Le champ photo ne peut être vide
      school_year: ['', Validators.required],  // school_year sera assigné dynamiquement
    });

    // Récupérer l'id de l'école et l'année scolaire depuis AuthService
    this.authService.user$.subscribe(user => {
      if (user) {
        this.idSchool = user.id_school; // Assignation de l'ID de l'école
        this.schoolYear = user.id_year; // Assignation de l'année scolaire

        // Mettre à jour le formulaire avec ces valeurs
        this.studentForm.patchValue({
          id_school: this.idSchool,
          school_year: this.schoolYear
        });
      }
    });
  }

  // Ouvrir le dialogue pour ajouter un élève
  showDialog() {
    this.visible = true;
  }

  // Fonction pour gérer la sélection de fichiers
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.studentForm.patchValue({
        photo: file, // Mettre à jour le formulaire avec le fichier sélectionné
      });
    }
  }

  // Soumettre le formulaire
  onSubmit(): void {
    if (this.studentForm.valid) {
      const formData = new FormData();
      
      // Ajout des champs du formulaire à FormData
      Object.keys(this.studentForm.value).forEach((key) => {
        if (key === 'photo' && this.selectedFile) {
          formData.append(key, this.selectedFile); // Ajouter le fichier photo
        } else {
          formData.append(key, this.studentForm.get(key)?.value);
        }
      });

      // Envoi des données via le service
      this.studentService.addStudent(formData).subscribe(
        (response) => {
          console.log('Student added successfully', response);
          alert('Élève ajouté avec succès !');
          this.studentForm.reset();
          this.visible = false;
        },
        (error) => {
          console.error('Error adding student', error);
          alert('Une erreur est survenue lors de l\'ajout de l\'élève.');
        }
      );
    } else {
      console.error('Form is invalid');
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
