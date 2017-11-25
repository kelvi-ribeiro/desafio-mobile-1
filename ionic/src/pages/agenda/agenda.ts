import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ToastController } from 'ionic-angular';
import { AgendaService } from '../../providers/agenda-service';

import{AgendaModalPage} from './agenda-modal'





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
              public agendaService:AgendaService, public modalCtrl: ModalController,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.agendaService.getAgendas().subscribe(agendas => {
      this.agendas = agendas;
      
    });
  }
  openModal(AgendaId) {
    let modal = this.modalCtrl.create(AgendaModalPage, AgendaId);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewDidLoad())
  }
    remove(agenda) {
      this.agendaService.remove(agenda.id).subscribe(response => {
        for (let i = 0; i < this.agendas.length; i++) {
          if (this.agendas[i] === agenda) {
            this.agendas.splice(i, 1);
            let toast = this.toastCtrl.create({
              message: 'Evento "' + agenda.nome + '" deletado.',
              duration: 2000,
              position: 'top'
            });
            toast.present();
          }
        }
      });
    }
  }