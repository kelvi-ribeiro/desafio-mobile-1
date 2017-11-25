webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgendaService = (function () {
    function AgendaService(http) {
        this.http = http;
        this.API = 'http://localhost:8080';
        this.AGENDA_API = this.API + '/agendas';
    }
    AgendaService.prototype.getAgendas = function () {
        return this.http.get(this.API + '/minhas-agendas')
            .map(function (response) { return response.json(); });
    };
    AgendaService.prototype.get = function (id) {
        return this.http.get(this.AGENDA_API + '/' + id)
            .map(function (response) { return response.json(); });
    };
    AgendaService.prototype.save = function (agenda) {
        var result;
        if (agenda['href']) {
            result = this.http.put(agenda.href, agenda);
        }
        else {
            result = this.http.post(this.AGENDA_API, agenda);
        }
        return result.map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error); });
    };
    AgendaService.prototype.remove = function (id) {
        return this.http.delete(this.AGENDA_API + '/' + id)
            .map(function (response) { return response.json(); });
    };
    AgendaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AgendaService);
    return AgendaService;
}());

//# sourceMappingURL=agenda-service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agenda/agenda.module": [
		206
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agenda__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_agenda_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agenda_modal__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AgendaPageModule = (function () {
    function AgendaPageModule() {
    }
    AgendaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_4__agenda_modal__["a" /* AgendaModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_agenda_service__["a" /* AgendaService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__agenda_modal__["a" /* AgendaModalPage */]
            ]
        })
    ], AgendaPageModule);
    return AgendaPageModule;
}());

//# sourceMappingURL=agenda.module.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_agenda_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agenda_modal__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaPage = (function () {
    function AgendaPage(navCtrl, navParams, agendaService, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.agendaService = agendaService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
    }
    AgendaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.agendaService.getAgendas().subscribe(function (agendas) {
            _this.agendas = agendas;
        });
    };
    AgendaPage.prototype.openModal = function (AgendaId) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__agenda_modal__["a" /* AgendaModalPage */], AgendaId);
        modal.present();
        // refresh data after modal dismissed
        modal.onDidDismiss(function () { return _this.ionViewDidLoad(); });
    };
    AgendaPage.prototype.remove = function (agenda) {
        var _this = this;
        this.agendaService.remove(agenda.id).subscribe(function (response) {
            for (var i = 0; i < _this.agendas.length; i++) {
                if (_this.agendas[i] === agenda) {
                    _this.agendas.splice(i, 1);
                    var toast = _this.toastCtrl.create({
                        message: 'Evento "' + agenda.nome + '" deletado.',
                        duration: 2000,
                        position: 'top'
                    });
                    toast.present();
                }
            }
        });
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\pages\agenda\agenda.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Minha agenda</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModal()" color="primary">\n\n        <ion-icon name="add-circle"></ion-icon>\n\n        <ion-icon name="calendar"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n  <ion-content  padding>\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let agenda of agendas">\n\n          <ion-item class="contorno" (click)="openModal({id: agenda.id})">\n\n       \n\n     <ion-item >\n\n        <h2>Nome do evento:{{agenda.nome}}</h2>\n\n        \n\n          </ion-item>\n\n     <ion-item>\n\n        <h2>Descrição do evento:{{agenda.descricao}}</h2>\n\n          </ion-item>\n\n    <ion-item>\n\n        <h2>Dia de Início:{{agenda.dataInicio}}</h2>\n\n            </ion-item>\n\n    <ion-item>\n\n     \n\n        <h2>Hora de Início:{{agenda.horaInicio}}</h2>\n\n\n\n            </ion-item>\n\n    <ion-item>\n\n        <h2>Dia de término:{{agenda.dataFim}}</h2>\n\n            </ion-item>\n\n    <ion-item>\n\n        <h2>Hora de término:{{agenda.horaFim}}</h2>\n\n\n\n            </ion-item>\n\n    </ion-item>\n\n       \n\n     \n\n            <ion-item-options>\n\n                <button ion-button color="danger" (click)="remove(agenda)">\n\n                  <ion-icon name="trash"></ion-icon> Deletar\n\n                </button>\n\n              </ion-item-options>\n\n            </ion-item-sliding>\n\n             \n\n             \n\n            </ion-list>\n\n          </ion-content>'/*ion-inline-end:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\pages\agenda\agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_agenda_service__["a" /* AgendaService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], AgendaPage);
    return AgendaPage;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_agenda_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendaModalPage = (function () {
    function AgendaModalPage(agendaService, params, viewCtrl, toastCtrl, navCtrl) {
        var _this = this;
        this.agendaService = agendaService;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.agenda = {};
        if (this.params.data.id) {
            this.agendaService.get(this.params.get('id')).subscribe(function (agenda) {
                _this.agenda = agenda;
                _this.agenda.href = agenda._links.self.href;
            });
        }
    }
    AgendaModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AgendaModalPage.prototype.save = function (form) {
        var _this = this;
        var update = form['href'];
        this.agendaService.save(form).subscribe(function (result) {
            var toast = _this.toastCtrl.create({
                message: 'Agenda "' + form.name + '" ' + ((update) ? 'Atualizado' : 'Adicionado') + '.',
                duration: 2000
            });
            toast.present();
            _this.dismiss();
        }, function (error) { return _this.error = error; });
    };
    AgendaModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.nome.setFocus();
        }, 400);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('nome'),
        __metadata("design:type", Object)
    ], AgendaModalPage.prototype, "nome", void 0);
    AgendaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\pages\agenda\agenda-modal.html"*/'<ion-header>\n\n        <ion-toolbar>\n\n          <ion-title>\n\n            {{agenda ? \'Detalhes do evento\' : \'Adicionar evento\'}}\n\n          </ion-title>\n\n          <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n              <span ion-text color="primary" showWhen="ios,core">Voltar</span>\n\n              <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-toolbar>\n\n        \n\n      </ion-header>\n\n      <ion-content padding>\n\n        <form #agendaForm="ngForm" (ngSubmit)="save(agendaForm.value)">\n\n          <input type="hidden" name="href" [(ngModel)]="agenda.href">\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-list inset>\n\n                <ion-item>\n\n                    <ion-input  name="name" type="hidden"\n\n                   [(ngModel)]="agenda.nome" #name></ion-input>\n\n       </ion-item>\n\n       <ion-item>\n\n                  <ion-input placeholder="Nome da agenda" name="nome" type="text"\n\n                             required [(ngModel)]="agenda.nome" #nome></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                        <ion-input placeholder="Descrição da agenda" name="descricao" type="text"\n\n                                   required [(ngModel)]="agenda.descricao" #descricao></ion-input>\n\n                      </ion-item>\n\n                      <ion-item>\n\n                            <ion-input placeholder="Inicio do Dia do evento" name="dataInicio" type="date"\n\n                                       required [(ngModel)]="agenda.dataInicio" #dataInicio></ion-input>\n\n                          </ion-item>\n\n                          <ion-item>                                \n\n                                        <ion-input placeholder="Horário de início" name="horaInicio" type="time"\n\n                                                   required [(ngModel)]="agenda.horaInicio" #horaInicio></ion-input>\n\n                                      </ion-item>\n\n                                      <ion-item>\n\n                                <ion-input placeholder="Fim do Dia evento" name="dataFim" type="date"\n\n                                           required [(ngModel)]="agenda.dataFim" #dataFim></ion-input>\n\n                              </ion-item>\n\n\n\n                              <ion-item>\n\n                                    <ion-input placeholder="Horário de encerramento" name="horaFim" type="time"\n\n                                               required [(ngModel)]="agenda.horaFim" #horaFim></ion-input>\n\n                                  </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n          \n\n          <ion-row>\n\n            <ion-col>\n\n              <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n\n              <button ion-button color="primary" full type="submit"\n\n                      [disabled]="!agendaForm.form.valid">Salvar</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-content>'/*ion-inline-end:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\pages\agenda\agenda-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_agenda_service__["a" /* AgendaService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], AgendaModalPage);
    return AgendaModalPage;
}());

//# sourceMappingURL=agenda-modal.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agenda_agenda__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__agenda_agenda__["a" /* AgendaPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Agenda" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="About" tabIcon="ios-information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sobre o projeto\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <h2>Ferramentas &nbsp;<ion-icon name="hammer"></ion-icon></h2>    \n    <h4> Google</h4>\n    <p>\n        &nbsp; &nbsp; &nbsp; O &nbsp; <ion-icon name="logo-google"></ion-icon> &nbsp; é uma empresa multinacional de serviços online e \n      software dos Estados Unidos.O Google hospeda e desenvolve uma\n       série de serviços e  produtos baseados na internet e gera lucro principalmente \n       através da publicidade pelo AdWords.\n      </p>\n      <h4>Youtube</h4>\n            <p>\n          &nbsp; &nbsp; &nbsp; O  &nbsp; <ion-icon name="logo-youtube"></ion-icon>\n          &nbsp;é uma plataforma de distribuição digital de vídeos. \n       Foi fundado em fevereiro de 2005 por três pioneiros do PayPal,\n        um famoso serviço da Internet ligado a gerenciamento de transferência de fundos.\n      GitHub:\n      \n    </p>\n\n    <h3>Ferramentas de desenvolvimento <ion-icon name="settings"></ion-icon></h3>\n    <h4>Visual Studio Code</h4>\n    <p>\n        &nbsp; &nbsp; &nbsp;O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows,\n         Linux e macOS. Ele inclui suporte para depuração, controle Git incorporado, realce de sintaxe, \n         complementação inteligente de código, snippets e refatoração de código.\n\n\n    </p>\n\n    <h4>Eclipse</h4>\n\n    <p>\n        &nbsp; &nbsp; &nbsp;Eclipse é um IDE para desenvolvimento Java, porém suporta várias outras linguagens a partir de plugins \n        como C/C++,PHP,ColdFusion, Python, Scala e plataforma Android. Ele foi feito em Java e segue\n         o modelo open source de desenvolvimento de software. \n        Atualmente faz parte do kit de desenvolvimento de software recomendado para desenvolvedores Android.\n\n    </p>\n\n    <h4>Git    <ion-icon name="git-branch"></ion-icon></h4>\n    <p>\n        &nbsp; &nbsp; &nbsp; Git é um sistema de controle de versão para monitorar alterações em arquivos\n         de computador e coordenar o trabalho nesses arquivos entre várias pessoas. \n         é usado principalmente para gerenciamento de código-fonte no desenvolvimento de software, \n        mas pode ser usado para acompanhar as mudanças em qualquer conjunto de arquivos.\n\n    </p>\n    <h4>Ionic</h4>\n    <p>\n        &nbsp; &nbsp; &nbsp; O  &nbsp;<ion-icon name="ionic"></ion-icon>&nbsp; é um completo SDK de código aberto \n        para o desenvolvimento de aplicativos móveis híbridos. \n         A versão original foi lançada em 2013 e foi construída em cima da AngularJS e Apache Cordova\n\n    </p>\n    <h4>Spring Boot</h4>\n    <p>\n        &nbsp; &nbsp; &nbsp; Spring é um framework open source para a plataforma Java criado por Rod Johnson e descrito em seu livro\n         "Expert One-on-One: JEE Design e Development". Trata-se de um framework não intrusivo, \n        baseado nos padroes de projeto inversão de controle (IoC) e injeção de dependência.\n\n    </p>\n    <h3>Java</h3>\n    <p>\n        Java é uma linguagem de programação interpretada orientada a objetos desenvolvida na década de 90 por \n        uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems.\n    </p>\n    \n    <h4>Sites de auxílio usados e link do vídeo de demonstração</h4>\n    <p>\n        <a href="https://www.youtube.com/watch?v=i_Vh2yadwfA&feature=youtu.be" target="_blank">Vídeo de demonstração do aplicativo</a><br/> <br/> \n    <a href="https://ionicframework.com/docs/"  target="_blank">O próprio site do Ionic para auxílio no uso de alguns componentes</a><br/> <br/>\n    <a href="https://www.w3schools.com/"  target="_blank" >w3schools para Auxílio nas formatações css</a><br/> <br/>\n    <a href="https://www.youtube.com/watch?v=_ZJ-COiIbVE&list=LLHPevJkLH4k5vki99ZUZvnQ&index=4"  target="_blank">Vídeo que usei para auxílio na criação do WebService</a><br/> <br/>\n    <a href="https://developer.okta.com/blog/2017/05/17/develop-a-mobile-app-with-ionic-and-spring-boot" target="_blank">Site que foi muito útil para integrar o WebService com o Ionic</a><br/> <br/>\n    \n  </p>\n    \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Bem vindo(a) ao projeto do desafio Mobile</h2>\n  <p>\n      &nbsp; &nbsp; &nbsp; Olá, esse  aqui é o meu primeiro projeto Ionic  e \n    pretendo desenvolver vários outros quando eu tiver mais tempo <br/>    \n    Deu um pouco de trabalho no começo já que conhecia muito pouco sobre o framework,\n     mas valeu a pena <ion-icon name="happy"></ion-icon> <br/>\n    Dê uma olhada na tab "About" que dei algumas especificações \n    de quais ferramentas e tutoriais  que eu usei no Projeto. No final da página "About" tem um link de um vídeo demonstração do aplicativo.\n    \n    \n    \n  </p>\n  <p>\n      &nbsp; &nbsp; &nbsp;Eu Adicionei um CRUD completo no projeto, o projeto já vem com 4 eventos na agenda carregados, Siga os passos para o CRUD:</p>\n      <p> &nbsp; &nbsp; &nbsp; Para Criar:Toque no botão "+" que está no canto superior direito ou no calendário ao lado dele para adicionar um evento na agenda.</p>\n      <p> &nbsp; &nbsp; &nbsp; Para Editar:Toque em qualquer parte de um evento que acionará um formulário já preenchido.</p>\n      <p> &nbsp; &nbsp; &nbsp; Para Deletar:Arraste para o lado esquerdo qualquer evento que irá aparecer um botão vermelho, depois disso, toque nele que irá deletar o evento.</p>\n      \n    \n    \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_agenda_agenda_module__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agenda/agenda.module#AgendaPageModule', name: 'AgendaPage', segment: 'agenda', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_agenda_agenda_module__["AgendaPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\kelvi\Desktop\desafio-mobile\ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map