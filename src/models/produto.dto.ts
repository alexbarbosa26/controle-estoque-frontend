import { SitesDTO } from './sites.dto';

export interface ProdutoDTO {
    codigo: string;
    nome: string;
    quantidade: number;
    imagem: string;
    site: SitesDTO;
}
