import { TrocaService } from 'src/services/domain/troca.service';
import { CartService } from 'src/services/domain/cart.service';
import { CartItem } from 'src/models/cart-item';
import { TrocasDTO } from 'src/models/trocas.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/models/usuario.dto';
import { UsuarioService } from 'src/services/domain/usuario.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  trocas: TrocasDTO;
  cartItems: CartItem[];
  usuario: UsuarioDTO;
  codTroca: number;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private usuarioService: UsuarioService,
    private trocaService: TrocaService,
    private messageService: MessageService
  ) { }

  ngOnInit() {

    const cod = this.route.snapshot.params[`troca`];

    this.cartItems = this.cartService.getCart().items;

    this.usuarioService.findById(cod)
      .subscribe(response => {
        this.usuario = response as UsuarioDTO;

        const cart = this.cartService.getCart();

        this.trocas = {
          usuario: { codigo: response['codigo'] },
          itens: cart.items.map(x => ({ quantidadeTroca: x.quantidade, produto: { codigo: x.produto.codigo } }))
        };
      });

  }

  total() {
    return this.cartService.total();
  }

  checkout() {
    this.trocaService.insert(this.trocas)
      .subscribe((response) => {
        this.cartService.createOrClearCart();

        this.codTroca = response.status;

        if (response.status === 201) {
          this.messageService.add({
            severity: 'success',
            summary: 'Troca registrada com sucesso!!!',
            detail: 'Verifique seu email'
          });
        }

      }, error => {
        if (error.status === 403) {
          this.router.navigate(['login']);
        }
      });

  }

  private extractId(location: string): string {
    const position = location.lastIndexOf('/');
    return location.substring(position + 1, location.length);
  }

  backHome() {
    this.messageService.clear();
    this.router.navigate(['']);
  }

  backCart() {
    this.router.navigate(['cart']);
  }

}
