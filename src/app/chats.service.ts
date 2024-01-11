import { Injectable } from '@angular/core';
import { Chat } from './chat';
import { ContactoService } from './contacto.service';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  chats: Chat[] = [];


  constructor(private contactoService: ContactoService) {
    this.inicializarChat();
  }

  inicializarChat(): void {
    this.chats = [];
    this.contactoService.getContactos().forEach(element => {
      const nuevoId = this.chats.length + 1;
      this.chats?.push(
        {
          id: nuevoId,
          contacto: element,
          mensajes: [{
            id: 1,
            contenido: 'mensaje de prueba',
            tipo: 'input',
            fecha: new Date()
          }],
          mensajesNoLeidos: [{
            id: 1,
            contenido: 'mensaje no leido de prueba',
            tipo: 'input',
            fecha: new Date()
          }]
        }
      );
    });
  }

  public getChats(): Chat[] {
    return this.chats;
  }

  public obtenerUltimoMensaje(mensajes: Mensaje[]): Mensaje | null {
    if (mensajes && mensajes.length > 0) {
      const ultimoMensaje = mensajes[mensajes.length - 1];

      return ultimoMensaje;
    }
    return null;

  }

  public obtenerMensajesNoLeidos(mensajesNoLeidos: Mensaje[]): number {
    if (mensajesNoLeidos && mensajesNoLeidos.length > 0) {
      return mensajesNoLeidos.length;
    }
    return 0;
  }
}
