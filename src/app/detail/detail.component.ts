import {Component, OnInit} from '@angular/core';
import { Client } from '../client';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  clientToShow: Client;

  constructor() {}

  ngOnInit() {
  }
}
