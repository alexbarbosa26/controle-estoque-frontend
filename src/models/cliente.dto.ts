import { SitesDTO } from './sites.dto';
export interface ClienteDTO {
    codigo: string;
    nome: string;
    situacao: string;
    site_cod: SitesDTO;
}
