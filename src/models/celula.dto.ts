import { RefDTO } from './ref.dto';

export interface CelulaDTO {
    codigo: string;
    nome: string;
    pep: string;
    cliente_cod: RefDTO;
}
