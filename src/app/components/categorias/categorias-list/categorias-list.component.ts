import { SitesDTO } from 'src/models/sites.dto';
import { Component, OnInit } from '@angular/core';
import { CategoriaDTO } from '../../../../models/categoria.dto';
import { CategoriaService } from '../../../../services/domain/categoria.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage.service';
import { UsuarioService } from 'src/services/domain/usuario.service';
import { UsuarioDTO } from 'src/models/usuario.dto';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {

  items: CategoriaDTO[];
  usuario: UsuarioDTO;
  sites: SitesDTO[];

  constructor(
    public storage: StorageService,
    public usuarioService: UsuarioService,
    public  categoriaService: CategoriaService,
    public router: Router
  ) {
    const localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          this.sites = response['site'];
        },
          error => {
            if (error.status === 403) {
              this.router.navigate(['login']);
            }
          });
    } else {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.categoriaService.findAll().subscribe(response => {
      this.items = response;
    },
    error => {});
  }

  showProdutos(categoria_id: string, site_id: string) {
    this.router.navigate(['/produto-details', categoria_id, site_id]);
  }

}
