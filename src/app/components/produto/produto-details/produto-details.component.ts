import { ProdutoService } from 'src/services/domain/produto.service';
import { ProdutoDTO } from 'src/models/produto.dto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.css']
})
export class ProdutoDetailsComponent implements OnInit {

  items: ProdutoDTO[];

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    let categoria_id: string = this.route.snapshot.params[`categoria_id`]
    let site_id: string = this.route.snapshot.params[`site_id`]

    if (categoria_id != undefined && site_id != undefined) {
      this.findProdutoCategoriaSite(categoria_id, site_id);
    }
  }

  findProdutoCategoriaSite(categoria_id: string, site_id: string) {
    this.produtoService.findByProdutoCategoriaSite(categoria_id, site_id)
      .subscribe(response => {
        this.items = response
                
      }, error => { });
  }


}
