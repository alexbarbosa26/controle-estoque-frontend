import { ProdutoDTO } from './produto.dto';

export interface CartItem {
    quantidade: number;
    numeroChamado: string;
    produto: ProdutoDTO;
}
