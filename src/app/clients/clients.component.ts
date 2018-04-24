import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ClientsService } from '../clients.service';
import { Client } from '../client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  @Output()
  selectedClientCard: EventEmitter<Client> = new EventEmitter<Client>();

  clients: Client[] = [];
  currentFilterCriteria = '';

  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.clientsService.getData().subscribe(data => {this.clients = data;
    });
  }

  getFilteredClients(): Client[] {
    if (this.currentFilterCriteria.length === 0) {
      return this.clients;
    } else {
      return this.clients.filter(
        c => c.general.firstName.toLowerCase().includes(this.currentFilterCriteria.toLowerCase()));
    }
  }

  showDetails(client: Client) {
    this.selectedClientCard.emit(client);
  }


}

