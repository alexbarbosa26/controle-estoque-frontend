import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteDTO } from 'src/models/cliente.dto';
import { API_CONFIG } from 'src/config/api.config';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ClienteService {

    constructor (
        private http: HttpClient
    ) {}

    findAll(): Observable<ClienteDTO[]> {
        return this.http.get<ClienteDTO[]>(`${API_CONFIG.baseURL}/produtos/list-produto`);
    }

    insert(obj: ClienteDTO) {
        return this.http.post(`${API_CONFIG.baseURL}/clientes`,
        obj, {
            observe: 'response',
            responseType: 'text'
        });
    }
}
