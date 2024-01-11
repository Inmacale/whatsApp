import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat';
import { ChatsService } from '../chats.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chatcontacto',
  templateUrl: './chatcontacto.page.html',
  styleUrls: ['./chatcontacto.page.scss'],
})
export class ChatcontactoPage implements OnInit {

  chat: Chat | undefined;
  newmensaje: string = '';

  constructor(private route: ActivatedRoute, private chatService: ChatsService) { }

  ngOnInit(): void {
    this.getChat();
  }

  getChat(): void {
    const chatId = this.route.snapshot.paramMap.get('id');
    if (chatId) {
      const parsedChatId = Number(chatId);
      this.chat = this.chatService.getChatById(parsedChatId);
    }
  }
  sendMensaje(): void {
    if (this.newmensaje.trim() !== '') {
      if (this.chat) {
        const nuevoMensaje = {
          id: this.chat.mensajes.length + 1,
          contenido: this.newmensaje,
          tipo: 'output',
          fecha: new Date(),
        };

        this.chat.mensajes.push(nuevoMensaje);
        this.newmensaje = '';
      }
    }
  }
}
