import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-pdf',
  standalone: false,
  
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.scss'
})
export class PdfComponent {
  bulletin = {
    "status": "success",
    "student": {
      "id_student": 25,
      "first_name": "John",
      "last_name": "Doe",
      "phone": "1234567890",
      "birth_date": "2000-01-01",
      "class_name": "3eme"
    },
    "notes": {
      "Trimestre 1": [
        {
          "id_note": 18,
          "subject_name": "Mathématiques",
          "homework": 16,
          "workontable": 10,
          "exam": 13,
          "moy_g": 52,
          "coefficient": 4,
          "appreciation": "Travail satisfaisant !"
        },
        {
          "id_note": 21,
          "subject_name": "SVT",
          "homework": 20,
          "workontable": 20,
          "exam": 20,
          "moy_g": 60,
          "coefficient": 3,
          "appreciation": "Très bon travail !"
        },
         {
          "id_note": 18,
          "subject_name": "Mathématiques",
          "homework": 16,
          "workontable": 10,
          "exam": 13,
          "moy_g": 52,
          "coefficient": 4,
          "appreciation": "Travail satisfaisant !"
        },
        {
          "id_note": 21,
          "subject_name": "SVT",
          "homework": 20,
          "workontable": 20,
          "exam": 20,
          "moy_g": 60,
          "coefficient": 3,
          "appreciation": "Très bon travail !"
        },
         {
          "id_note": 18,
          "subject_name": "Mathématiques",
          "homework": 16,
          "workontable": 10,
          "exam": 13,
          "moy_g": 52,
          "coefficient": 4,
          "appreciation": "Travail satisfaisant !"
        },
        {
          "id_note": 21,
          "subject_name": "SVT",
          "homework": 20,
          "workontable": 20,
          "exam": 20,
          "moy_g": 60,
          "coefficient": 3,
          "appreciation": "Très bon travail !"
        },
         {
          "id_note": 18,
          "subject_name": "Mathématiques",
          "homework": 16,
          "workontable": 10,
          "exam": 13,
          "moy_g": 52,
          "coefficient": 4,
          "appreciation": "Travail satisfaisant !"
        },
        {
          "id_note": 21,
          "subject_name": "SVT",
          "homework": 20,
          "workontable": 20,
          "exam": 20,
          "moy_g": 60,
          "coefficient": 3,
          "appreciation": "Très bon travail !"
        },
         {
          "id_note": 18,
          "subject_name": "Mathématiques",
          "homework": 16,
          "workontable": 10,
          "exam": 13,
          "moy_g": 52,
          "coefficient": 4,
          "appreciation": "Travail satisfaisant !"
        },
        {
          "id_note": 21,
          "subject_name": "SVT",
          "homework": 20,
          "workontable": 20,
          "exam": 20,
          "moy_g": 60,
          "coefficient": 3,
          "appreciation": "Très bon travail !"
        }
      ]
    }
  };

  // constructor(private bulletinService: BulletinService) {}

  // ngOnInit() {
  //   this.bulletinService.getBulletin().subscribe(
  //     data => {
  //       this.bulletin = data;
  //     },
  //     error => {
  //       console.error('Erreur lors du chargement du bulletin', error);
  //     }
  //   );
  // }

  telechargerPDF() {
    const pdf = new jsPDF();

     // **📌 Informations de l'étudiant**
    pdf.setFontSize(9);
    pdf.setTextColor(0, 0, 0);
    pdf.text(" Ministère de l'Enseignement Primaire, Secondaire et de l'Alphabétisation", 20, 10);
    pdf.text("COMPLEXE SCOLAIRE GASPARD MONGE", 20, 15);
    pdf.text(`Discipline*Travail*Réussite`, 20, 20);
    
    // **📝 Ajouter un titre stylé**
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(22);
    pdf.setTextColor(40, 40, 255);
    pdf.text("Bulletin Scolaire", 105, 40, { align: "center" });

    // **📌 Informations de l'étudiant**
    const student = this.bulletin.student;
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Nom : ${student.first_name} ${student.last_name}`, 20, 60);
    pdf.text(`Classe : ${student.class_name}`, 20, 70);
    pdf.text(`Année scolaire : 2024-2025`, 20, 80);

    let currentY = 90;

    // **📚 Parcourir chaque trimestre et afficher les notes**
    for (const trimestre of Object.keys(this.bulletin.notes)) {
      const trimestre: string = "Trimestre 1"; // Exemple de trimestre dynamique
const notes = this.bulletin.notes[trimestre as keyof typeof this.bulletin.notes];

     

      // **📊 Table stylée des matières et notes**
      autoTable(pdf, {
        startY: currentY,
        head: [['Matière', 'Devoirs', 'Travail', 'Examen', 'Moyenne', 'Coef', 'Appréciation']],
        body: notes.map((note: { subject_name: any; homework: any; workontable: any; exam: any; moy_g: any; coefficient: any; appreciation: any; }) => [
          note.subject_name,
          note.homework,
          note.workontable,
          note.exam,
          note.moy_g,
          note.coefficient,
          note.appreciation
        ]),
        theme: 'grid',
        styles: { fontSize: 10, cellPadding: 2 },
        headStyles: { fillColor: [40, 40, 255], textColor: 255, fontStyle: 'bold' },
        alternateRowStyles: { fillColor: [240, 240, 240] }
      });

      // **Mise à jour de la position verticale**
      currentY = (pdf as any).lastAutoTable.finalY + 15;
    }

    // **📥 Télécharger le PDF**
    pdf.save(`Bulletin_${student.first_name}_${student.last_name}.pdf`);
  }
}