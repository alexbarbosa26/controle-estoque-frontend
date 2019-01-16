import { SitesDTO } from './sites.dto';

export interface ProdutoDTO{
    codigo:string;
    nome:string;
    quantidade:number;
    site: SitesDTO;
}