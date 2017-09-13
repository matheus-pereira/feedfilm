import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { FeedPage } from "../feed/feed";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = FeedPage;
  tab2Root = ContactPage;

  constructor() {

  }
}
