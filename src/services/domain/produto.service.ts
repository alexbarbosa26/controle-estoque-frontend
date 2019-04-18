import { API_CONFIG } from './../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { ProdutoDTO } from 'src/models/produto.dto';

@Injectable()
export class ProdutoService {

    constructor(public http: HttpClient) {

    }

    findAll(): Observable<ProdutoDTO[]> {
        return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseURL}/produtos/list-produto`);
    }

    insert(obj: ProdutoDTO) {
        return this.http.post(`${API_CONFIG.baseURL}/produtos`,
        obj, {
            observe: 'response',
            responseType: 'text'
        });
    }

    findByProdutoCategoriaSite(categoria_id: string, site_id: string): Observable<ProdutoDTO[]> {

        return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseURL}/produtos/?sites=${site_id}&categorias=${categoria_id}`);

    }
}
