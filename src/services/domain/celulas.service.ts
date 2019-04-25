import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteDTO } from 'src/models/cliente.dto';
import { API_CONFIG } from 'src/config/api.config';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { CelulaDTO } from 'src/models/celula.dto';

@Injectable()
export class CelulasService {

    constructor (
        private http: HttpClient
    ) {}

    findAll(): Observable<CelulaDTO[]> {
        return this.http.get<CelulaDTO[]>(`${API_CONFIG.baseURL}/celula/list-produto`);
    }

    insert(obj: CelulaDTO) {
        return this.http.post(`${API_CONFIG.baseURL}/celula`,
        obj, {
            observe: 'response',
            responseType: 'text'
        });
    }

    findByCelulaByCliente(cliente_id: string): Observable<CelulaDTO[]> {

        return this.http.get<CelulaDTO[]>(`${API_CONFIG.baseURL}/celula/cliente/${cliente_id}`);

    }

}
