import { RefDTO } from './ref.dto';
export interface ItemTrocaDTO {
    quantidadeTroca: number;
    numeroChamado: string;
    motivo: string;
    produto: RefDTO;
}
