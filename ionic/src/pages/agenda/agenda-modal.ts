import { AgendaService } from '../../providers/agenda-service';
import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './agenda-modal.html'
})
export class AgendaModalPage {
  @ViewChild('nome') nome;
  
  agenda: any = {};
  error: any;
  

  constructor(public agendaService: AgendaService,              
              public params: NavParams,
              public viewCtrl: ViewController,
              public toastCtrl: ToastController,
              public navCtrl: NavController) {
    if (this.params.data.id) {
      this.agendaService.get(this.params.get('id')).subscribe(agenda => {
        this.agenda = agenda;
        this.agenda.href = agenda._links.self.href;
        
      });
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save(form: NgForm) {
    let update: boolean = form['href'];
    this.agendaService.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Agenda "' + form.name + '" ' + ((update) ? 'Atualizado' : 'Adicionado') + '.',
        duration: 2000
      });
      toast.present();
      this.dismiss();
    }, error => this.error = error)
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.nome.setFocus();
    },400);
  }
}