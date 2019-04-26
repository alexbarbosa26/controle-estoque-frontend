import { CelulasService } from 'src/services/domain/celulas.service';
import { CelulaDTO } from 'src/models/celula.dto';
import { TrocaService } from 'src/services/domain/troca.service';
import { CartService } from 'src/services/domain/cart.service';
import { CartItem } from 'src/models/cart-item';
import { TrocasDTO } from 'src/models/trocas.dto';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
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

  troca: TrocasDTO;
  cartItems: CartItem[];
  usuario: UsuarioDTO;
  codTroca: number;
  celula: CelulaDTO;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private usuarioService: UsuarioService,
    private trocaService: TrocaService,
    private messageService: MessageService,
    private celulaService: CelulasService
  ) { }

  ngOnInit() {

    const cod = this.route.snapshot.paramMap.get(`codUser`);
    const codCelula: any = +this.route.snapshot.paramMap.get(`codCelula`);

    this.buscarCelula();
    
    this.cartItems = this.cartService.getCart().items;

    this.usuarioService.findById(cod)
      .subscribe(response => {

        this.usuario = response as UsuarioDTO;

        const cart = this.cartService.getCart();

        this.troca = {
          usuario: { codigo: response['codigo'] },
          celula: {codigo: codCelula},
          itens: cart.items.map(x => (
            {
              quantidadeTroca: x.quantidade,
              numeroChamado: x.numeroChamado, motivo: x.motivo,
              produto: {
                codigo: x.produto.codigo
              }
            }))
        };
      });
  }

  buscarCelula() {
    const codigo: any = +this.route.snapshot.paramMap.get(`codCelula`);
    this.celulaService.findByCelula(codigo).subscribe(
      response => {
        this.celula = response as unknown as CelulaDTO;
      }, error => {}
    );
  }

  total() {
    return this.cartService.total();
  }

  checkout() {
    this.trocaService.insert(this.troca)
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
