import { Injectable } from '@angular/core';
import { Chat } from './chat';
import { ContactoService } from './contacto.service';

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
          mensajes: [],
          mensajesNoLeidos: []
        }
      );
    });
  }

  public getChats(): Chat[] {
    return this.chats;
  }
}
