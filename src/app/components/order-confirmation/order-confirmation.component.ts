import { TrocaService } from 'src/services/domain/troca.service';
import { CartService } from 'src/services/domain/cart.service';
import { CartItem } from 'src/models/cart-item';
import { TrocasDTO } from 'src/models/trocas.dto';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/models/usuario.dto';
import { UsuarioService } from 'src/services/domain/usuario.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  trocas: TrocasDTO;
  cartItems: CartItem[];
  usuario: UsuarioDTO;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private usuarioService: UsuarioService,
    private trocaService:TrocaService
  ) {
    let teste = this.route.params.subscribe(params=> console.log(params))
  }

  ngOnInit() {
    
    let cod = this.route.snapshot.params[`troca`];
    
    this.cartItems = this.cartService.getCart().items;
    
    this.usuarioService.findById(cod)
      .subscribe(response => {
        this.usuario = response as UsuarioDTO;

        let cart = this.cartService.getCart();

          this.trocas = {
            usuario: { codigo: response['codigo'] },
            itens: cart.items.map(x => { return { quantidadeTroca: x.quantidade, produto: { codigo: x.produto.codigo } } })
          }
      });

  }

  total(){
    return this.cartService.total();
  }

  checkout(){
    console.log(this.trocas)
    this.trocaService.insert(this.trocas)
    .subscribe(response=>{
      this.cartService.createOrClearCart();

      console.log(response.headers.get('location'))
    },error=>{})

  }

}
