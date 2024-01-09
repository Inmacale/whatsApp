import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];


  onIonInfinite(event: any): void {
    // Simula la carga de más datos después de 2 segundos
    setTimeout(() => {
      const newData = [10, 11, 12, 13, 14, 15]; // Puedes cargar datos adicionales desde tu servicio aquí
      this.data = [...this.data, ...newData];

      // Completa el evento de desplazamiento infinito
      event.target.complete();

      // Desactiva el desplazamiento infinito si ya has cargado todos los datos (por ejemplo, aquí desactivo después de cargar 15 elementos)
      if (this.data.length >= 15) {
        event.target.disabled = true;
      }
    }, 2000); // Simula la carga por 2 segundos
  }

}
