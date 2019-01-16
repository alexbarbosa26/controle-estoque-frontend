import { RefDTO } from './ref.dto';
import { ItemTrocaDTO } from './item-troca.dto';

export interface TrocasDTO{
    usuario:RefDTO;
    itens:ItemTrocaDTO[];
}