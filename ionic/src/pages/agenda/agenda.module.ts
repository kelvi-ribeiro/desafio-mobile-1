import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaPage } from './agenda';
import { AgendaService } from '../../providers/agenda-service';


@NgModule({
  declarations: [
    AgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaPage),
  ],
  providers: [
    AgendaService
   
  ]
})

export class AgendaPageModule {}
