import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaPage } from './agenda';
import { AgendaService } from '../../providers/agenda-service';
import { AgendaModalPage } from './agenda-modal';


@NgModule({
  declarations: [
    AgendaPage,
    AgendaModalPage
  ],
  imports: [
    IonicPageModule.forChild(AgendaPage),
  ],
  providers: [
    AgendaService
   
  ],
  entryComponents: [
    AgendaModalPage
  ]
})

export class AgendaPageModule {}
