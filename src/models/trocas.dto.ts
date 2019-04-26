import { CelulaDTO } from './celula.dto';
import { RefDTO } from './ref.dto';
import { ItemTrocaDTO } from './item-troca.dto';

export interface TrocasDTO {
    usuario: RefDTO;
    celula: RefDTO;
    itens: ItemTrocaDTO[];
}
