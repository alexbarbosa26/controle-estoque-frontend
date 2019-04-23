import { SitesDTO } from './../../../models/sites.dto';
import { StorageService } from 'src/services/storage.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/services/domain/dashboard.service';
import { UsuarioService } from 'src/services/domain/usuario.service';
import { UsuarioDTO } from 'src/models/usuario.dto';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }

  :host ::ng-deep .ui-message,
  :host ::ng-deep .ui-inputtext {
      margin-right: .25em;
  }
`],
    providers: [MessageService]
})
export class HomeComponent implements OnInit {

    barChartData: any;
    barChartDataV: any;
    options: any;
    usuario: UsuarioDTO;
    categoria: any;
    item: Array<string[]>;
    codUser: SitesDTO[];
    nome: any;
    qtd: any[] = [];
    resultado: any;

    constructor(
        private dashboardService: DashboardService,
        private storage: StorageService,
        private usuarioService: UsuarioService
    ) {

    }

    ngOnInit() {
        this.graficoBarraH();
        this.graficoBarraV();
    }

    graficoBarraV() {
        const user = this.storage.getLocalUser();
        this.usuarioService.findByEmailDash(user.email)
            .subscribe(response => {

                this.codUser = response['site'];
                const cod: any = this.codUser.map(x => x.codigo);

                this.dashboardService.totalPorCategoria(cod)
                    .subscribe((resp: any) => {

                        const lab = new Array();
                        const dat = new Array();

                        for (let i = 0; i < resp.length; i++) {
                            lab.push(resp[i][0]);
                            dat.push(resp[i][1]);
                        }

                        this.barChartDataV = {
                            labels: lab,
                            datasets: [{
                                label: 'QTD',
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
                                        fontSize: 10
                                    }
                                }],
                                xAxes: [{
                                    ticks: {
                                        stacked: true,
                                        beginAtZero: true,
                                        fontSize: 10
                                    }
                                }]
                            },
                            animation: {
                                easing: 'linear',
                                duration: 2000
                            },
                            title: {
                                display: true,
                                text: 'Estoque do Site',
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
                    });
            });

    }

    graficoBarraH() {
        const user = this.storage.getLocalUser();
        this.usuarioService.findByEmailDash(user.email)
            .subscribe(response => {

                this.codUser = response['site'];
                const cod: any = this.codUser.map(x => x.codigo);

                this.dashboardService.totalPorProdutoSite(cod)
            .subscribe((resp: any) => {

                this.barChartData = {
                    labels: resp.map(x => x.nome),
                    datasets: [
                        {
                            label: 'Estoque',
                            data: resp.map(x => x.quantidade),
                            borderColor: '#1E88E5',
                            backgroundColor: '#2555A3'

                        }
                    ]

                };
                this.options = {
                    scales: {
                        yAxes: [{
                            ticks: {
                                stacked: true,
                                beginAtZero: true,
                                fontSize: 10
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                stacked: true,
                                beginAtZero: true,
                                fontSize: 10
                            }
                        }]
                    },
                    animation: {
                        easing: 'linear',
                        duration: 2000
                    },
                    title: {
                        display: true,
                        text: 'Estoque do Site',
                        fontSize: 12
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            // This more specific font property overrides the global property
                            fontColor: 'black',
                            defaultFontSize: 12
                        }

                    }

                };

            });

            });
    }

}
