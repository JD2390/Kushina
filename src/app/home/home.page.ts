import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private actions: ActionSheetController,
    private alerta: AlertController,
  ) {
    console.log('0 - Construtor - Home');
  }

  ngOnInit() {​
    console.log('1 - ngOnInit - Home');​
  }​
  ionViewWillEnter() {
    console.log('2 - ionViewWillEnter - Home');
  }​
  ionViewDidEnter() {
    console.log('3 - ionViewDidEnter - Home');
  }
  ionViewWillLeave() {   ​
    console.log('4 - ionViewWillLeave - Home');  ​
  }​
  ionViewDidLeave() {   ​
    console.log('5 - ionViewDidLeave - Home');  ​
  }​
  onDestroy() {
    console.log('6 - onDestroy - Home'); 
  }​

  public abraPagina1(){
    console.log('Acessando Pagina 01 - Home');
    this.router.navigate(['/pagina1'])
  }
  public abraPagina2(){
    console.log('Acessando Pagina 02 - Home');
    this.router.navigate(['/pagina2'])
  }
  public abraPagina3(){
    console.log('Acessando Pagina 03 - Home');
    this.router.navigate(['/pagina3'])
  }

  async criarMenu(){
    let menuSuspenso = await this.actions.create({
      header: 'Titulo do Menu',
      buttons:[{
        text:'Ir Para Pagina 01',
        icon: 'boat-outline',
        handler: ()=>{
          this.abraPagina1();
        }
      },{
        text:'Grandes Empresas',
        icon: 'bicycle-outline',
        handler: ()=>{
          this.abraPagina2();
        }
      },{
        text:'Pagina 03',
        icon: 'ionic-outline',
        handler: ()=>{
          this.abraPagina3();
        }
      }]
    })
    menuSuspenso.present();
  }

  async criarAlerta(){
    const alertar = await this.alerta.create({
      header: 'alerta',
      subHeader: 'isso é um alerta',
      message: 'mensagem Alerta',
      buttons:[{
        text: 'OK',
        handler:()=>{
          alert('Você vai embora');
        }
      }, 'Cancela']
    });

    alertar.present();
  }

  

}
