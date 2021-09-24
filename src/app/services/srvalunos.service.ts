import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Aluno {
  nome: string;
  idade: number;
}

@Injectable({
  providedIn: 'root'
})
export class SrvalunosService {

  constructor(
    private http: HttpClient
  ) { }

  listarAlunos():Observable<Aluno[]> { 
    return this.http.get<Aluno[]>('http://localhost:5000/alunos').pipe(
      map((alunos)=>{
        return alunos;
      })
    );
  }
  cadastrarAlunos(aluno: Aluno):Observable<Aluno> {
    return this.http.post<Aluno>('http://localhost:5000/alunos', aluno).pipe(
      map((aluno)=>{
        return aluno;
      })
    );
   }
  filtrarAlunos(nome:string) { }

  excluirAlunos(aluno: Aluno):Observable<Aluno[]>  {    
    return this.http.delete<Aluno[]>('http://localhost:5000/alunos/${aluno.nome}').pipe(
      map((alunos)=>{
        return alunos;
      })
    );

   }
}
