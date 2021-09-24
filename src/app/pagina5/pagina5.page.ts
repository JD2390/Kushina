import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvalunosService, Aluno } from '../services/srvalunos.service';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.page.html',
  styleUrls: ['./pagina5.page.scss'],
})
export class Pagina5Page implements OnInit {

  constructor(
    private router: Router,
    private srv: SrvalunosService,
    private fb: FormBuilder
  ) {
    this.formPesquisa = this.fb.group({
      campoPesquisa: new FormControl('')
    })
   }

  listarAlunos: Aluno[] = [];
  formPesquisa: FormGroup;
  
  atualizar(){
    this.srv.listarAlunos().subscribe(alunos=>{
      this.listarAlunos = alunos;
    })
  };

  excluirAluno(aluno:Aluno){
    this.srv.excluirAlunos(aluno).subscribe(alunos =>{
      this.listarAlunos = alunos;
      alert("Aluno foi excluido com sucesso!!!");
    })
  }

  filtarAlunos(){
    const nome = this.formPesquisa.get('campoPesquisa');
    //this.srv.filtrarAlunos(nome);
    console.log(this.formPesquisa.value);
  }

  Al(){
    this.router.navigate['/pagina1'];
  }

  // salvar(){
  //   const novoAluno: Aluno = {
  //     nome: this.formAluno.get('nome').value
  //   },
  //   {
  //     idade: this.formAluno.get('idade').value
  //   }
  // };

  ngOnInit() {
    console.log('olá');
  }

  ionViewDidEnter(){
    this.atualizar();
  }

}
