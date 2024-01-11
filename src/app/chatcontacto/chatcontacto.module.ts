import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatcontactoPageRoutingModule } from './chatcontacto-routing.module';

import { ChatcontactoPage } from './chatcontacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatcontactoPageRoutingModule
  ],
  declarations: [ChatcontactoPage]
})
export class ChatcontactoPageModule {}
