import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposeComponent } from './messages/compose/compose.component';
import { CommunicationComponent } from './communication.component';

const routes: Routes = [
    {
    path:'qa',
    component:CommunicationComponent
    },
    {
    path:'compose',
    component:ComposeComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule { }
