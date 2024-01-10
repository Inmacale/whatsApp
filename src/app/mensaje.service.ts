import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';


@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajes: Mensaje[] = [];

  constructor() { }

  getMensajes(): Mensaje[] {
    return this.mensajes
  }

  sendMensaje(contenido: string, tipo: string): void {
    const newMensaje: Mensaje = {
      id: this.mensajes.length + 1,
      contenido,
      tipo,
      fecha: new Date()
    };

    this.mensajes.push(newMensaje);

    setTimeout(() => {
      const respuesta: Mensaje = {
        id: this.mensajes.length + 1,
        contenido: 'Respuesta automática después de 10 segundos',
        tipo: 'input',
        fecha: new Date()
      };

      this.mensajes.push(respuesta);
      console.log('Mensajes después de enviar:', this.mensajes);
    }, 10000);
  }

}
