import { Component } from '@angular/core';

@Component({
  selector: 'app-all-n-t',
  standalone: false,
  
  templateUrl: './all-n-t.component.html',
  styleUrl: './all-n-t.component.scss'
})
export class AllNTComponent {
  eleves = [
    {
      note_id: 1,
      class_id: 2,
      subject_id: 1,
      class_name: "6eme",
      subject_name: "adef khalil oba",
      coefficient: 4,
      moy_de_c: 15,
      moy_de_com: 14,
      moy: 14.5,
      moy_g: 58,
      appreciations: "Très bien",
      term: 2
    },
    {
      note_id: 2,
      class_id: 2,
      subject_id: 2,
      class_name: "6eme",
      subject_name: "ocs steven",
      coefficient: 3,
      moy_de_c: 12,
      moy_de_com: 13,
      moy: 12.5,
      moy_g: 37.5,
      appreciations: "Bien",
      term: 2
    },
    {
      note_id: 3,
      class_id: 2,
      subject_id: 3,
      class_name: "6eme",
      subject_name: "davide",
      coefficient: 3,
      moy_de_c: 10,
      moy_de_com: 11,
      moy: 10.5,
      moy_g: 31.5,
      appreciations: "Correct",
      term: 2
    },
    {
      note_id: 4,
      class_id: 2,
      subject_id: 4,
      class_name: "6eme",
      subject_name: "francoi",
      coefficient: 5,
      moy_de_c: 18,
      moy_de_com: 16,
      moy: 17,
      moy_g: 85,
      appreciations: "Excellent",
      term: 2
    },
    {
      note_id: 5,
      class_id: 2,
      subject_id: 5,
      class_name: "6eme",
      subject_name: "jean luc",
      coefficient: 2,
      moy_de_c: 13,
      moy_de_com: 14,
      moy: 13.5,
      moy_g: 27,
      appreciations: "Bien",
      term: 2
    },
    {
      note_id: 6,
      class_id: 2,
      subject_id: 6,
      class_name: "6eme",
      subject_name: "vanessa del",
      coefficient: 3,
      moy_de_c: 11,
      moy_de_com: 12,
      moy: 11.5,
      moy_g: 34.5,
      appreciations: "Satisfaisant",
      term: 2
    },
    {
      note_id: 7,
      class_id: 2,
      subject_id: 7,
      class_name: "6eme",
      subject_name: "Divine",
      coefficient: 2,
      moy_de_c: 14,
      moy_de_com: 13,
      moy: 13.5,
      moy_g: 27,
      appreciations: "Très bien",
      term: 2
    },
    {
      note_id: 8,
      class_id: 2,
      subject_id: 8,
      class_name: "6eme",
      subject_name: "esther",
      coefficient: 1,
      moy_de_c: 16,
      moy_de_com: 15,
      moy: 15.5,
      moy_g: 15.5,
      appreciations: "Excellent",
      term: 2
    },
    {
      note_id: 9,
      class_id: 2,
      subject_id: 9,
      class_name: "6eme",
      subject_name: "junior",
      coefficient: 2,
      moy_de_c: 17,
      moy_de_com: 16,
      moy: 16.5,
      moy_g: 33,
      appreciations: "Très bien",
      term: 2
    },
    {
      note_id: 10,
      class_id: 2,
      subject_id: 10,
      class_name: "6eme",
      subject_name: "Pacific",
      coefficient: 1,
      moy_de_c: 19,
      moy_de_com: 19,
      moy: 19,
      moy_g: 19,
      appreciations: "Bien",
      term: 2
    },
];
}
