import { Pensamento } from '../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    autoria: 'Dev',
    modelo: 'modelo1',
    conteudo: 'Aprendendo Angular!!!',
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert('nvo pensamento criado')
  }

  cancelar() {
    alert('cancelou!!!')
  }
}
