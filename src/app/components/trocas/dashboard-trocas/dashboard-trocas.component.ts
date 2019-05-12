import { Component, OnInit } from '@angular/core';
import { TrocaService } from 'src/services/domain/troca.service';

@Component({
  selector: 'app-dashboard-trocas',
  templateUrl: './dashboard-trocas.component.html',
  styleUrls: ['./dashboard-trocas.component.css']
})
export class DashboardTrocasComponent implements OnInit {


  sortOptions: any[];
  barChart: any;
  options: any;
  sortKey: string;

  constructor(
    private trocaService: TrocaService
  ) { }

  ngOnInit() {
    this.sortOptions = [
      { label: 'TODOS', value: '' },
      { label: 'NET', value: 'NET' },
      { label: 'NEOENERGIA', value: 'NEOENERGIA' },
      { label: 'CIELO', value: 'CIELO' },
      { label: 'TIM', value: 'TIM' }
    ];
  }

  graficoBarra() {
    this.trocaService.dashboardTrocas(this.sortKey, 1).subscribe(
      (response: any) => {
        const lab = new Array();
        const dat = new Array();

        for (let i = 0; i < response.length; i++) {
          lab.push(response[i][0]);
          dat.push(response[i][1]);
        }

        this.barChart = {
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
