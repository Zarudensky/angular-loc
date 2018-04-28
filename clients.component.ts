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
      return this.clients.filter(c => this.searchFunction(c));
    }
  }

  private searchFunction(c: Client): boolean {
    const searchCriteriaLowerCased = this.currentFilterCriteria.toLowerCase();
    if (c.general.firstName.toLowerCase().includes(searchCriteriaLowerCased)) {return true; }
    if (c.general.lastName.toLowerCase().includes(searchCriteriaLowerCased)) {return true; }
    if (c.job.company.toLowerCase().includes(searchCriteriaLowerCased)) {return true; }
    if (c.job.title.toLowerCase().includes(searchCriteriaLowerCased)) {return true; }
    if (c.contact.email.toLowerCase().includes(searchCriteriaLowerCased)) {return true; }
    if (c.contact.phone.toLowerCase().includes(searchCriteriaLowerCased)) {return true; }
    if (c.address.street.toLowerCase().includes(searchCriteriaLowerCased)) {return true; }
    if (c.address.city.toLowerCase().includes(searchCriteriaLowerCased)) {return true; }
    if (c.address.zipCode.toLowerCase().includes(searchCriteriaLowerCased)) {return true; }
    if (c.address.country.toLowerCase().includes(searchCriteriaLowerCased)) {return true; }
    return false;
  }

  showDetails(client: Client) {
    this.selectedClientCard.emit(client);
  }


}

