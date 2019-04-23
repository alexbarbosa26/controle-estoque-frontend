import { Component, OnInit } from '@angular/core';
import { ClienteDTO } from 'src/models/cliente.dto';

@Component({
  selector: 'app-pick-clientes',
  templateUrl: './pick-clientes.component.html',
  styleUrls: ['./pick-clientes.component.css']
})
export class PickClientesComponent implements OnInit {

  public items: ClienteDTO[];
  constructor(
  ) {}

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
