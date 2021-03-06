import { SitesDTO } from 'src/models/sites.dto';
export interface UsuarioDTO {
    codigo: string;
    matricula: string;
    nome: string;
    email: string;
    site: SitesDTO[];
    perfis: string;

    imageUrl?: string;
}
