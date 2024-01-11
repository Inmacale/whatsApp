import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatcontactoPage } from './chatcontacto.page';

const routes: Routes = [
  {
    path: '',
    component: ChatcontactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatcontactoPageRoutingModule {}
