import { Component , ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaService } from '../../providers/agenda-service';



/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  private agendas: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public agendaService:AgendaService) {
  }

  ionViewDidLoad() {
    this.agendaService.getAgendas().subscribe(agendas => {
      this.agendas = agendas;
      
    })
  }
  
}
