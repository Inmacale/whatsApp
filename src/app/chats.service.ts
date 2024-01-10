import { Injectable } from '@angular/core';
import { Chat } from './chat';
import { ContactoService } from './contacto.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  chats: Chat[]=[];
  

  constructor(private contactoService: ContactoService) {
    this.inicializarChat();
   }

   inicializarChat():void{
    this.chats = [];
      this.contactoService.getContactos().forEach(element => {
        
        this.chats?.push(
          {
            contacto: element,
            mensajes: [],
            mensajesNoLeidos: []
          }
        );
      });
   }

   public getChats(): Chat[]{
    return this.chats;
   }
}
