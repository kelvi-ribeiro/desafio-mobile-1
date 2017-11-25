import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

import { HomePage } from '../home/home';
import { AgendaPage } from '../agenda/agenda';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AgendaPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
