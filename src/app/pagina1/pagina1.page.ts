import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('1 - ngOnInit - Pag.01');​
  }​
  ionViewWillEnter() {
    console.log('2 - ionViewWillEnter - Pag.01');
  }​
  ionViewDidEnter() {
    console.log('3 - ionViewDidEnter - Pag.01');
  }
  ionViewWillLeave() {   ​
    console.log('4 - ionViewWillLeave - Pag.01');  ​
  }​
  ionViewDidLeave() {   ​
    console.log('5 - ionViewDidLeave - Pag.01');  ​
  }​
  onDestroy() {
    console.log('6 - onDestroy - Pag.01'); 
  }​
  public voltarHome(){
    console.log('Acessando Home - Pag. 01');
    this.router.navigate(['/home'])
  }
}
