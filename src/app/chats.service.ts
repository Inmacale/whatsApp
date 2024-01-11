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
          mensajesNoLeidos: []
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
}
