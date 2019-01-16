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
    private usuarioService: UsuarioService
  ) {

    this.route.params.subscribe(params=> console.log(params))
    
    
    
  }

  ngOnInit() {
    
    this.trocas = this.route.snapshot.params[`troca`];
    
    this.cartItems = this.cartService.getCart().items;
    console.log(this.cartItems)
    this.usuarioService.findById(this.trocas)
      .subscribe(response => {
        this.usuario = response as UsuarioDTO;
      });

  }

  total(){
    return this.cartService.total();
  }

}
