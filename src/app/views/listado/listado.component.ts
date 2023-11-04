import { Component } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  listadoEntradas: Entrada[] = [];

  //En el constructor se inyecta y se inicializa la dependencia al servicio
  //que permite realizar la petición a la API
  constructor(private entradaService: EntradaService) {} 

  //Cuando se inicia el componente se llama al método getEntradas
  ngOnInit() {
    this.recuperarEntradas();
  }

  public mostrarTitulo(titulo: string): void {
    alert(`Entrada seleccionada: ${titulo}`);
  }

  //Método encargado de realizar la petición a la API y obtener el array de entradas
  //al permanecer el componente a la escucha de recibir datos del observable de manera asincrona
  private recuperarEntradas(): void {
    this.entradaService.getEntradas().subscribe(
      (data) => {
        this.listadoEntradas = data;
      },
      (error) => {},
      () => {}
    );
  }

}
