import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ProdutoDTO } from 'src/models/produto.dto';
import { API_CONFIG } from 'src/config/api.config';

@Injectable()
export class DashboardService{

    constructor(public http: HttpClient){

    }

    totalPorProduto() : Observable<ProdutoDTO[]>{
        return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseURL}/produtos/list-produto`);
    }

    totalPorCategoria(codSite:string) {
        return this.http.get(`${API_CONFIG.baseURL}/produtos/dashboard/list-categoria/?sites=${codSite}`);
    }

}