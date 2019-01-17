import { StorageService } from 'src/services/storage.service';
import { ProdutoDTO } from 'src/models/produto.dto';
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
    teste:[]

    constructor(
        private dashboardService: DashboardService,
        private storage: StorageService,
        private usuarioService: UsuarioService
    ) {

    }

    ngOnInit() {
        this.graficoBarra();
        this.graficoBarraV();
    }

    graficoBarraV() {
        let user = this.storage.getLocalUser();
        this.usuarioService.findByEmailDash(user.email)
            .subscribe(response => {

                
                let codUser:any=1
                this.dashboardService.totalPorCategoria(codUser)
                    .subscribe(resp => {
                        this.teste=resp[''];
                        this.barChartDataV = {
                            labels: this.teste.map(x=>x[0]),
                            datasets: [{
                                label: 'QTD',
                                data: this.teste.map(x=>x[1]),
                                borderColor: '#2272B4',
                                backgroundColor: "#2555A3"
                            }]
                        }
                        console.log(this.barChartDataV)
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
                                easing: 'easeOutBounce',
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
                    })
            });

    }
    graficoBarra() {
        this.dashboardService.totalPorProduto()
            .subscribe(response => {

                this.barChartData = {
                    labels: response.map(x => x.nome),
                    datasets: [
                        {
                            label: 'Estoque',
                            data: response.map(x => x.quantidade),
                            borderColor: '#1E88E5',
                            backgroundColor: "#2555A3"

                        }
                    ]

                }
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
                        easing: 'easeOutBounce',
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

            })
    }


}
