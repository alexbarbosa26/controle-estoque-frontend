import { ProdutoDTO } from './produto.dto';

export interface CartItem {
    quantidade: number;
    numeroChamado: string;
    motivo: string;
    produto: ProdutoDTO;
}
