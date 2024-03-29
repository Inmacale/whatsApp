import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then(m => m.ChatsPageModule)
  },
  {
    path: 'comunidad',
    loadChildren: () => import('./comunidad/comunidad.module').then(m => m.ComunidadPageModule)
  },
  {
    path: 'novedades',
    loadChildren: () => import('./novedades/novedades.module').then(m => m.NovedadesPageModule)
  },
  {
    path: 'llamadas',
    loadChildren: () => import('./llamadas/llamadas.module').then(m => m.LlamadasPageModule)
  },
  {
    path: 'chatcontacto/:id',
    loadChildren: () => import('./chatcontacto/chatcontacto.module').then(m => m.ChatcontactoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
