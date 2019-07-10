import { Component } from '@angular/core';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  createComponent = CreateComponent;

  constructor() {}

}
