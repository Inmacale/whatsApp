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

  sendMensaje(contenido: string, remitente: string, input: boolean): void {
    const newMensaje: Mensaje = {
      id: this.mensajes.length + 1,
      contenido,
      remitente,
      input,
      fecha: new Date()
    };

    this.mensajes.push(newMensaje);

    setTimeout(() => {
      const respuesta: Mensaje = {
        id: this.mensajes.length + 1,
        contenido: 'Respuesta automática después de 10 segundos',
        remitente: 'Sistema',
        input: true,
        fecha: new Date()
      };

      this.mensajes.push(respuesta);
      console.log('Mensajes después de enviar:', this.mensajes);
    }, 10000);
  }

}
