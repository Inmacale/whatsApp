import { Component, OnInit } from '@angular/core';

import { ChatsService } from '../chats.service';
import { Chat } from '../chat';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {


  chats: Chat[] = [];
  totalChat: number = 0;
  contactosPerPage: number = 5; // Cantidad de contactos por página

  constructor(private chatService: ChatsService) { }

  ngOnInit(): void {
    this.getChat();
  }

  getChat(): void {
    this.chats = this.chatService.getChats();
    this.totalChat = this.chats.length;
  }

  onIonInfinite(event: any): void {
    setTimeout(() => {
      const startIndex = this.chats.length;
      const endIndex = startIndex + this.contactosPerPage;
      const newChat = this.chatService.getChats().slice(startIndex, endIndex);

      this.chats = [...this.chats, ...newChat];

      event.target.complete();

      if (this.chats.length >= this.totalChat) {
        event.target.disabled = true;
      }
    }, 2000);
  }
}
