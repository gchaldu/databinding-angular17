import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primer-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './primer-form.component.html',
  styleUrl: './primer-form.component.css'
})
export class PrimerFormComponent {
  nombre: string = '';

  persona = {
    id: 0,
    nombre: '',
    email: ''
  }
}
