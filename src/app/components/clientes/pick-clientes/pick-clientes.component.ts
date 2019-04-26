import { CelulaDTO } from 'src/models/celula.dto';
import { Component, OnInit } from '@angular/core';
import { SitesDTO } from 'src/models/sites.dto';
import { CelulasService } from 'src/services/domain/celulas.service';
import { ClienteService } from 'src/services/domain/cliente.service';
import { ClienteDTO } from 'src/models/cliente.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/services/domain/cart.service';
import { UsuarioService } from 'src/services/domain/usuario.service';
import { TrocaService } from 'src/services/domain/troca.service';
import { UsuarioDTO } from 'src/models/usuario.dto';
import { TrocasDTO } from 'src/models/trocas.dto';
import { CartItem } from 'src/models/cart-item';
import { StorageService } from 'src/services/storage.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pick-clientes',
  templateUrl: './pick-clientes.component.html',
  styleUrls: ['./pick-clientes.component.css']
})
export class PickClientesComponent implements OnInit {

  cartItems: CartItem[];
  codTroca: number;
  codSites: SitesDTO[];
  listCliente: ClienteDTO[];
  formCliente: FormGroup;
  celulas: CelulaDTO[];
  cliente: ClienteDTO[];
  troca: TrocasDTO;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private usuarioService: UsuarioService,
    private clienteService: ClienteService,
    private celulaService: CelulasService,
    private storage: StorageService
  ) {
    this.formCliente = this.formBuilder.group({
      nome: [null, [Validators.required]],
      celula: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.cartPage();
    this.buscarClientes();

  }

  cartPage() {
    const cod = this.route.snapshot.params[`troca`];

    this.cartItems = this.cartService.getCart().items;

    this.usuarioService.findById(cod)
      .subscribe(response => {

        const cart = this.cartService.getCart();
        this.troca = {
          usuario: { codigo: response['codigo'] },
          celula: this.formCliente.value.celula,
          itens: cart.items.map(x => (
            {
              quantidadeTroca: x.quantidade,
              numeroChamado: x.numeroChamado,
              motivo: x.motivo,
              produto: {
                codigo: x.produto.codigo
              }
            }))
        };
      });
  }

  buscarClientes() {
    const user = this.storage.getLocalUser();
    this.usuarioService.findByEmail(user.email).subscribe(
      response => {
        this.codSites = response['site'];

        const sites: any = this.codSites.map(x => x.codigo);
        this.clienteService.findByClienteAndSiteAndSituacao(sites).subscribe(
          resp => {
            this.listCliente = resp;

          }, error => { });

      }
    );
  }

  updateCelula() {
    const cliente_id = this.formCliente.value.nome;

    this.celulaService.findByCelulaByCliente(cliente_id).subscribe(
      response => {
        this.celulas = response;
        this.formCliente.patchValue({
          celula: null
        });

      }, error => { });

  }

  backCart() {
    this.router.navigate(['cart']);
  }

  nextPage() {
    this.router.navigate([`order-confirmation/`, {
      codUser: this.troca.usuario.codigo,
      codCelula: this.formCliente.value.celula
    }]);
  }

}
