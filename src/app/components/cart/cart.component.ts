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

  constructor(
    private cartService: CartService,
    private router: Router,
    private storage: StorageService,
    private usuarioService: UsuarioService
  ) { }

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
            itens: cart.items.map(x => ({ quantidadeTroca: x.quantidade, produto: { codigo: x.produto.codigo } }))
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
    this.router.navigate(['order-confirmation', this.troca.usuario.codigo]);
  }

}
