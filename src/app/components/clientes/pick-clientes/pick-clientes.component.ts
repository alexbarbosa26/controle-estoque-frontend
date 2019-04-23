import { ClienteDTO } from './../../../../models/cliente.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-clientes',
  templateUrl: './pick-clientes.component.html',
  styleUrls: ['./pick-clientes.component.css']
})
export class PickClientesComponent implements OnInit {

  public items: ClienteDTO[];
  constructor() { }

  ngOnInit() {

    this.items = [
      {
        codigo: '1',
        nome: 'NET',
        situacao: '1',
        site_cod: {
          codigo: '1',
          nome: 'JBT'
        }
      }
    ];
  }

}
