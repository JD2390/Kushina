import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SrvnavegacaoService } from '../services/srvnavegacao.service';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page implements OnInit {

  constructor(
    private router: Router,
    private activedRouter: ActivatedRoute,
    private servico: SrvnavegacaoService
  ) { }
  tec='';
  ngOnInit() {
    //const r = this.activedRouter.snapshot.queryParamMap.get('tecnologia');
    //this.retorno = JSON.parse(r);

    //this.retorno = this.servico.tecnologiaParametro;
    this.tec = this.router.getCurrentNavigation().extras.state.tecnologiaParametro;
  }

}
