import { Injectable } from '@angular/core';
import { TrocasDTO } from 'src/models/trocas.dto';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';

@Injectable()
export class TrocaService {

    constructor(public http: HttpClient) {

    }

    insert(obj: TrocasDTO) {
        return this.http.post(`${API_CONFIG.baseURL}/trocas`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    findByUsuario(page: number = 0, linesPerPage: number = 24) {
        return this.http.get(`${API_CONFIG.baseURL}/trocas/page/?page=${page}&linesPerPage=${linesPerPage}`);
    }

    dashboardTrocas(clienteId: string, siteId: number) {
        return this.http.get(`${API_CONFIG.baseURL}/trocas/motivo/${siteId}/?cliente=${clienteId}`)
    }
}
