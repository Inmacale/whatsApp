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
      input,
      remitente,
      fecha: new Date()
    };

    this.mensajes.push(newMensaje);
  }
}
