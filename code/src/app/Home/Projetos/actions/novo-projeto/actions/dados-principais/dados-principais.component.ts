import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../../../../node_modules/@angular/forms';
import { ProjetoService } from '../../../../../../services/projeto.service';
import { Projeto } from '../../../../../../models/projeto.model';

@Component({
  selector: 'app-dados-principais',
  templateUrl: './dados-principais.component.html',
  styleUrls: ['./dados-principais.component.css']
})
export class DadosPrincipaisComponent implements OnInit {
  projeto : Projeto
  
  constructor(private formBuilder: FormBuilder, private projetoService: ProjetoService) { }
  dadosPrincipaisForm: FormGroup;
  
  ngOnInit() {
    this.projeto = new Projeto();

    this.dadosPrincipaisForm = this.formBuilder.group(
      {
      }
    );
  }

  Adicionar() {

    this.projetoService.Adicionar(this.projeto)
      .subscribe((data: any) => {
        switch (data.codigo) {
          case 200:
            window.alert("ok")
            break;
          default:
            window.alert("erro")
            break;
        }
      },
        error => {
          alert('Erro ao tentar adicionar.');
        });
  }
}
