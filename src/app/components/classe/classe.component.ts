import { Component, Input } from '@angular/core';
import { Class } from '../../models/classes';

@Component({
    selector: 'app-classe',
    templateUrl: './classe.component.html',
    styleUrl: './classe.component.scss',
    standalone: false
})
export class ClasseComponent {
    @Input() classe!: Class;
}
