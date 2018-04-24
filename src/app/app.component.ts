import {Component, ViewChild} from '@angular/core';
import { Client } from './client';
import {DetailComponent} from './detail/detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(DetailComponent)

  private details: DetailComponent;

  constructor() {}

   setSelectedClient(client: Client) {
     this.details.clientToShow = client;
   }
}
