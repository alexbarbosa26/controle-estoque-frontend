import { ProdutoService } from 'src/services/domain/produto.service';
import { ProdutoDTO } from 'src/models/produto.dto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/services/domain/cart.service';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.css']
})
export class ProdutoDetailsComponent implements OnInit {

  items: ProdutoDTO[];
  selectedValor: ProdutoDTO;
  displayDialog: boolean;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {

    const categoria_id: string = this.route.snapshot.params[`categoria_id`];
    const site_id: string = this.route.snapshot.params[`site_id`];

    if (categoria_id !== undefined && site_id !== undefined) {
      this.findProdutoCategoriaSite(categoria_id, site_id);
    }
  }

  findProdutoCategoriaSite(categoria_id: string, site_id: string) {
    this.produtoService.findByProdutoCategoriaSite(categoria_id, site_id)
      .subscribe((response: ProdutoDTO[]) => {
        this.items = response;

      }, error => { });
  }

  selectValor(event: Event, car: ProdutoDTO) {
    this.selectedValor = car;
    this.displayDialog = true;
    event.preventDefault();
  }

  onDialogHide() {
    this.selectedValor = null;
  }

  addToCart(itemProduto: ProdutoDTO) {
    this.cartService.addProduto(itemProduto);
    this.router.navigate(['cart']);
  }

  backCategorias() {
    this.router.navigate(['categorias-list']);
  }

}
