import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(
    private router: Router,
    private plat: Platform
  ) { }
  plataforma='ios';
  ionViewWillEnter() {
    if (this.plat.is('android')){
    console.log('Estou no Android')
    this.plataforma='android'
    }
    if (this.plat.is('ios')){
      console.log('Estou no IOS')
      this.plataforma='ios'
    }
    if (this.plat.is('desktop')){
      console.log('Estou no Desktop')
      this.plataforma='desktop'
    }
  }​
  meusCards = [
    {
      title: 'Toyota Motor',
      subtitle: 'Nº15',
      content: 'Quem não precisa de um carro? A Toyota é conhecida por produzir carros de qualidade a preços acessíveis. A empresa também tem investido muito em carros híbridos e mais amigos do ambiente. O método de produção e montagem altamente eficiente da Toyota revolucionou a indústria automóvel.',
      imagem: '../../assets/empresas/mm-toyota-cke.jpg',
      valor: 'R$ 704,1 bilhões',
    },
    {
      title: 'Citigroup',
      subtitle: 'Nº14',
      content: 'Com sede em Nova York, a Citigroup surgiu em 1998 a partir da fusão entre o Citicorp com o Travelers Group. Hoje, é uma das maiores empresas do mundo, a 5ª maior em ativos, e conta com aproximadamente 204 mil funcionários.',
      imagem: '../../assets/empresas/mm-citigroup-cke.jpg',
      valor: 'R$ 644,5 bilhões',
    },
    {
      title: 'Samsung Electronics',
      subtitle: 'Nº13',
      content: 'Atualmente, a Samsung é líder na produção de smartphones de qualidade a preços (relativamente) acessíveis. A empresa também produz tablets, baterias e peças para tecnologia de outras marcas, como a Apple.',
      imagem: '../../assets/empresas/samsung-electronics-cke.jpg',
      valor: 'R$ 1 trilhão',
    },
    {
      title: 'AT&T',
      subtitle: 'Nº12',
      content: 'AT&T é a maior empresa de telecomunicações do mundo. A companhia é descendente da empresa fundada por Alexander Graham Bell, o inventor do telefone. A AT&T fornece serviços de internet, televisão, telefone e celular a milhares de pessoas nos Estados Unidos.',
      imagem: '../../assets/empresas/empresa-atet-cke.jpg',
      valor: 'R$ 933,3 bilhões',
    },
    {
      title: 'ExxonMobil',
      subtitle: 'Nº11',
      content: 'A ExxonMobil é uma das maiores companhias de petróleo do mundo. Apesar de fazer alguma pesquisa na área das energias renováveis, seu foco está na gasolina e no gás natural e a empresa apoia grupos que negam o impacto da humanidade sobre o ambiente.',
      imagem: '../../assets/empresas/exxonmobil-cke.jpg',
      valor: 'R$ 1,3 trilhão',
    }
  ]

  ngOnInit() {
  }
  public voltarHome(){
    console.log('Acessando Home - Pag. 02');
    this.router.navigate(['/home'])
  }
}
