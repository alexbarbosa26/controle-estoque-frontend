import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { Component, OnInit } from '@angular/core';
import { TrocaService } from 'src/services/domain/troca.service';
import { SitesService } from 'src/services/domain/sites.service';

@Component({
  selector: 'app-dashboard-trocas',
  templateUrl: './dashboard-trocas.component.html',
  styleUrls: ['./dashboard-trocas.component.css']
})
export class DashboardTrocasComponent implements OnInit {


  sortOptions: any[];
  sitesOptions: any[];
  diasOptions: any[];
  barChart: any;
  pieChart: any;
  options: any;
  sortKey: any;
  sortSite: any;
  sortDia: any = 30;
  cliente: ClienteDTO[];

  constructor(
    private trocaService: TrocaService,
    private clienteService: ClienteService,
    private sitesService: SitesService
  ) { }

  ngOnInit() {
    this.getSites();
    this.getPeriodo();
  }

  getGraficos() {
    this.graficoBarra();
    this.graficoPie();
  }

  getPeriodo() {
    this.diasOptions = [
      { label: 'Hoje', value: 0 },
      { label: '7 Dias', value: 7 },
      { label: '15 Dias', value: 15 },
      { label: '30 Dias', value: 30 }
    ];
  }

  getClientes() {
    this.clienteService.findByClienteAndSiteAndSituacao(this.sortSite).subscribe(
      response => {

        this.sortOptions = [];
        this.sortOptions.push({ label: 'TODOS', value: '' });
        for (let i = 0; i < response.length; i++) {
          this.sortOptions.push({ label: response[i].nome, value: response[i].nome });
        }
      });
  }

  getSites() {
    this.sitesService.findAll().subscribe(
      response => {
        this.sitesOptions = [];
        for (let i = 0; i < response.length; i++) {
          this.sitesOptions.push({ label: response[i].nome, value: response[i].codigo });
        }
      }
    );
  }

  graficoBarra() {
    this.trocaService.dashboardTrocas(this.sortKey, this.sortSite, this.sortDia).subscribe(
      (response: any) => {
        const lab = new Array();
        const dat = new Array();

        for (let i = 0; i < response.length; i++) {
          lab.push(response[i][1]);
          dat.push(response[i][2]);
        }

        this.barChart = {
          labels: lab,
          datasets: [{
            label: this.sortKey,
            data: dat,
            borderColor: '#2272B4',
            backgroundColor: '#2555A3'
          }]
        };

        this.options = {
          scales: {
            yAxes: [{
              ticks: {
                stacked: true,
                beginAtZero: true,
                fontSize: 14
              }
            }],
            xAxes: [{
              ticks: {
                stacked: true,
                beginAtZero: true,
                fontSize: 14
              }
            }]
          },
          animation: {
            easing: 'linear',
            duration: 2000
          },
          title: {
            display: true,
            text: 'Trocas X Site X Cliente',
            fontSize: 12
          },
          legend: {
            position: 'bottom',
            labels: {
              fontColor: 'black',
              defaultFontSize: 12
            }

          }

        };

      }
    );
  }

  graficoPie() {
    this.trocaService.dashboardTrocas(this.sortKey, this.sortSite, this.sortDia).subscribe(
      (response: any) => {
        const lab = new Array();
        const dat = new Array();
        const prod = new Array();

        console.log(response);

        for (let i = 0; i < response.length; i++) {
          prod.push(response[i][0]);
          lab.push(response[i][1]);
          dat.push(response[i][2]);
        }

        this.pieChart = {
          labels: prod,
          datasets: [{
            data: dat,
            borderColor: [
              '#2272B4',
              '#2585BD',
              '#4BA3C9',
              '#308FBF',
              '#3795C1',
              '#97B5D8',
              '#CCDBEC',
              '#6491C5'],
              backgroundColor: [
              '#2272B4',
              '#2585BD',
              '#4BA3C9',
              '#308FBF',
              '#3795C1',
              '#97B5D8',
              '#CCDBEC',
              '#6491C5'],
              hoverBackgroundColor: [
              '#2272B4',
              '#2585BD',
              '#4BA3C9',
              '#308FBF',
              '#3795C1',
              '#97B5D8',
              '#CCDBEC',
              '#6491C5']
          }]
        };

        this.options = {
          scales: {
            yAxes: [{
              ticks: {
                stacked: true,
                beginAtZero: true,
                fontSize: 14
              }
            }],
            xAxes: [{
              ticks: {
                stacked: true,
                beginAtZero: true,
                fontSize: 14
              }
            }]
          },
          animation: {
            easing: 'linear',
            duration: 2000
          },
          title: {
            display: true,
            text: 'Trocas X Site X Cliente',
            fontSize: 12
          },
          legend: {
            position: 'bottom',
            labels: {
              fontColor: 'black',
              defaultFontSize: 12
            }

          }

        };

      }
    );
  }

}
