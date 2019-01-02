import { API_CONFIG } from './../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ProdutoDTO } from 'src/models/produto.dto';

@Injectable()
export class ProdutoService{

    constructor(public http: HttpClient){

    }

    findAll() : Observable<ProdutoDTO[]> {
        return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseURL}/produtos`);
    }
}