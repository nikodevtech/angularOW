import { Component, Input } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {
  //Input hace referencia a que este componente recibe datos de otro componente
  //y que en su propia etiqueta o selector está vinculado con un atributo entrada
  //Véase en listado.component.html
  @Input() 
  entrada!: Entrada; 
}
