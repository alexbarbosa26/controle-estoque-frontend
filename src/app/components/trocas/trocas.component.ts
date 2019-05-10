import { Component, OnInit } from '@angular/core';
import { TrocasDTO } from 'src/models/trocas.dto';
import { TrocaService } from 'src/services/domain/troca.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-trocas',
  templateUrl: './trocas.component.html',
  styleUrls: ['./trocas.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class TrocasComponent implements OnInit {

  cols: any[];
  itensTrocas: TrocasDTO[] = [];
  page = 0;
  constructor(
    private troca: TrocaService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.loadData();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 1000);

    this.cols = [
      { header: 'Código' },
      { header: 'Usuário' },
      { header: 'Data Troca' },
      { header: 'Cliente' },
      { header: 'Célula' }
    ];
  }

  loadData() {
    this.troca.findByUsuario(this.page).subscribe(
      response => {
        this.itensTrocas = this.itensTrocas.concat(response['content']);
      });
  }

  onScroll() {
    this.page++;
    this.spinner.show();
    this.loadData();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 500);
  }
}
