import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SrvnavegacaoService } from '../services/srvnavegacao.service';

interface ITecnologia{
  icone:string;
  nome:string;
  cor:string;
  descircao:string;
  site:string;
}

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor(
    private router: Router,
    private servico: SrvnavegacaoService
  ) { }

  ngOnInit() {
  }

  tecnologias =[
    {
      cor: 'indigo',
      icone:'logo-gitlab',
      nome:'GITLAB',
      descricao:'Plataforma para repositorio',
      site:'https://about.gitlab.com/',
    },
    {
      icone:'logo-docker',
      nome: 'DOCKER',
      cor: 'brown',
      descricao:'',
      site:'',
    },
    {
      icone:'logo-ionic',
      nome: 'IONIC',
      cor: 'blueviolet',
      descricao:'',
      site:'',
    }
  ]

  showAlerta(tec: ITecnologia){
    // const extras: NavigationExtras = {
    //   queryParams:{
    //     tecnologias: JSON.stringify(tec),
    //   }
    // };
    //this.servico.tecnologiaParametro = tec;
    //this.router.navigate(['/pagina4'], extras)
    const tecParam = {
      state:{
        tecnologiaParametro: tec,
      },
    }
    this.router.navigateByUrl('/pagina4', tecParam);
  }
}
