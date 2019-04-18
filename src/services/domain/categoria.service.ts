import { CategoriaDTO } from './../../models/categoria.dto';
import { API_CONFIG } from './../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriaService {

    constructor(public http: HttpClient) {

    }

    findAll(): Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseURL}/categorias`);
    }

    insert(obj: CategoriaDTO) {
        return this.http.post(`${API_CONFIG.baseURL}/categorias`,
        obj, {
            observe: 'response',
            responseType: 'text'
        });
    }
}
