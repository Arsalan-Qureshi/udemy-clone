import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessagesComponent} from '../../messages/messages.component';
import { CommunicationComponent } from '../../communication.component';
const routes: Routes = [
    {
    path: 'qa',
    component: CommunicationComponent
    },

    {
      path: 'messages',
      component: MessagesComponent
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
