import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ChatsPage } from '../chats/chats.page';
import { ComunidadPage } from '../comunidad/comunidad.page';
import { NovedadesPage } from '../novedades/novedades.page';
import { LlamadasPage } from '../llamadas/llamadas.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  declarations: [HomePage,ChatsPage,ComunidadPage, NovedadesPage,LlamadasPage]
})
export class HomePageModule {}
