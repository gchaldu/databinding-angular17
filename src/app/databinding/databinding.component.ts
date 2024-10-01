import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  //Interpolation
  title: string = 'Mi titulo';

  getSuma(num: number, num2: number) {
    return num + num2;
  }

  //property binding
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled: boolean = true;
  isActive: boolean = true;
  backgroundColor: string = 'red';

  imageProperties = {
    src: 'https://angular.io/assets/images/logos/angular/angular.png',
    alt: 'Angular Logo',
    width: '200',
    height: '200'
  };

  //event binding
  message: string = ''
  hanbleClick() {
    this.message = 'boton clickeado!'
  }

  userInput: string = '';
  charCount: number = 0;
  onInputChange(event: any) {
    if (event.target.value.length > 4) {
      this.userInput = event.target.value;
    }
  }

  keyMessage: string = '';
  onKeyUp(event: KeyboardEvent) {
    this.keyMessage = `Tecla presionada: ${event.key}`;
  }

  onSubmit(event: Event) {
    event.preventDefault();  // Evitar el comportamiento por defecto
    console.log('Formulario enviado');
  }

  isChecked: boolean = false;
  onCheckboxChange(event: any) {
    this.isChecked = event.target.checked;
  }

  hoverMessage: string = '';
  onMouseOver() {
    this.hoverMessage = '¡Mouse sobre el botón!';
  }
  onMouseOut() {
    this.hoverMessage = '';
  }
}
