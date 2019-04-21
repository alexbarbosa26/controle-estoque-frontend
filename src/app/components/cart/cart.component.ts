import { SelectItem } from 'primeng/api';
import { UsuarioService } from './../../../services/domain/usuario.service';
import { StorageService } from 'src/services/storage.service';
import { ProdutoDTO } from 'src/models/produto.dto';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/models/cart-item';
import { Router, NavigationExtras } from '@angular/router';
import { CartService } from 'src/services/domain/cart.service';
import { TrocasDTO } from 'src/models/trocas.dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[];
  loading: boolean;
  troca: TrocasDTO;
  numeroChamado: string;
  motivos: any[];
  motivo: string;

  constructor(
    private cartService: CartService,
    private router: Router,
    private storage: StorageService,
    private usuarioService: UsuarioService
  ) { 

    this.motivos = [
      {name: 'Defeito Técnico'},
      {name: 'Mau Uso'},
      {name: 'Reposição'},
      {name: 'Configuração'},
      {name: 'Projeto'}
  ];
  }

  ngOnInit() {
    this.loadCart();
    this.loadCartProdutos();
    this.loading = true;
  }

  loadCart() {
    const cart = this.cartService.getCart();
    this.items = cart.items;
  }

  loadCartProdutos() {
    const localUser = this.storage.getLocalUser();

    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          const cart = this.cartService.getCart();

          this.troca = {
            usuario: { codigo: response['codigo'] },
            itens: cart.items.map(x => ({ quantidadeTroca: x.quantidade, numeroChamado: x.numeroChamado, produto: { codigo: x.produto.codigo } }))
          };          
        });

    }
  }

  removeItem(produto: ProdutoDTO) {
    this.items = this.cartService.removeProduto(produto).items;
  }

  increaseQuantity(produto: ProdutoDTO) {
    this.items = this.cartService.increaseQuantity(produto).items;
  }

  chamado(produto: ProdutoDTO) {
    const cart = this.cartService.getCart();
    const position = cart.items.findIndex(x => x.produto.codigo == produto.codigo);
    if(position !== -1) {
        cart.items[position].numeroChamado = this.numeroChamado;
        cart.items[position].motivo = this.motivo;
    }
    this.storage.setCart(cart);
    this.items = this.cartService.increaseQuantity(produto).items;
    return cart;
}

  decreaseItem(produto: ProdutoDTO) {
    this.items = this.cartService.decreaseQuantity(produto).items;
  }

  total() {
    return this.cartService.total();
  }

  goOn() {
    this.router.navigate(['categorias-list']);
  }

  nextPage() {
    console.log(this.troca)
    this.router.navigate(['order-confirmation', this.troca.usuario.codigo]);
  }

}
