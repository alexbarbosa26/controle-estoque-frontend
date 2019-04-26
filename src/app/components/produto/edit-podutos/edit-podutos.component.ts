import { MessageService } from 'primeng/api';
import { SitesDTO } from './../../../../models/sites.dto';
import { UsuarioDTO } from 'src/models/usuario.dto';
import { StorageService } from 'src/services/storage.service';
import { UsuarioService } from 'src/services/domain/usuario.service';
import { ProdutoDTO } from 'src/models/produto.dto';
import { ProdutoService } from 'src/services/domain/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-podutos',
  templateUrl: './edit-podutos.component.html',
  styleUrls: ['./edit-podutos.component.css']
})
export class EditPodutosComponent implements OnInit {

  public produto: ProdutoDTO[];
  public produtos: ProdutoDTO;
  public sitesId: SitesDTO[];
  public clonedProduto: { [s: string]: ProdutoDTO; } = {};
  cols: any[];

  constructor(
    private produtoService: ProdutoService,
    private usuarioService: UsuarioService,
    private storage: StorageService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.buscarProdutos();

    this.cols = [
      { field: 'codigo', header: 'Codigo' },
      { field: 'nome', header: 'Nome' },
      { field: 'qtd', header: 'Qtd' },
      { field: 'color', header: 'Color' }
  ];
  }

  buscarProdutos() {
    const user = this.storage.getLocalUser();
    this.usuarioService.findByEmail(user.email).subscribe(
      response => {
        this.sitesId = response['site'];
        const cod: any = this.sitesId.map(x => x.codigo);

        this.produtoService.findAllProdutoBySite(cod).subscribe(
          resp => {
            this.produto = resp;
          }
        );
      }
    );
  }

  onRowEditInit(prod: ProdutoDTO) {
    this.clonedProduto[prod.codigo] = { ...prod };
  }

  onRowEditSave(prod: ProdutoDTO) {
    if (prod.quantidade > 0) {
      // delete this.clonedProduto[prod.codigo];
      const obj = this.clonedProduto;
      this.produtoService.update(prod).subscribe(
        response => {
          this.produtos = response as unknown as ProdutoDTO;
          delete this.clonedProduto[prod.codigo];
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto Atualizado' });
        }, error => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar o produto' });
        }
      );

    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Campo Obrigatório' });
    }
  }

  onRowEditCancel(prod: ProdutoDTO, index: number) {
    this.produto[index] = this.clonedProduto[prod.codigo];
    delete this.clonedProduto[prod.codigo];
  }

}
