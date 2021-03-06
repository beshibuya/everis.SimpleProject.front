import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DadosPrincipaisComponent } from './actions/dados-principais/dados-principais.component';
import { TabsetComponent } from 'ngx-bootstrap';
import { AtribuicaoEquipeComponent } from './actions/atribuicao-equipe/atribuicao-equipe.component';
import { AnexosComponent } from './actions/anexos/anexos.component';
import { Projeto } from '../../../../_models/projeto.model';
import { GenericService } from '../../../../_services/generic.service';
import { SolicitacaoMudanca } from '../../../../_models/solicitacao_mudanca.model';
import { FaseModel } from 'src/app/_models/fase.model';
import { Status } from 'src/app/_models/status.model';


@Component({
  selector: 'app-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {

  @ViewChild(DadosPrincipaisComponent) formDados: DadosPrincipaisComponent;
  @ViewChild(AtribuicaoEquipeComponent) formAtribuicaoEquipe: AtribuicaoEquipeComponent;
  @ViewChild(AnexosComponent) formAnexo: AnexosComponent;
  @ViewChild('alterarTabs') alterarTabs: TabsetComponent;


  constructor(private router: Router, private arouter: ActivatedRoute, private svc: GenericService) { }

  id: number;
  filtroProjeto = new Projeto();
  statusAtual = new Status();
  projeto = new Projeto();
  solicitacaoMudancas: Array<SolicitacaoMudanca>;
  fases: Array<FaseModel>;
  filtroSolicitacaoMudanca = new SolicitacaoMudanca();
  totalSolicitacaoMudancas: number;
  totalFases: number;

  ngOnInit() {
    this.arouter.paramMap.subscribe(res => {
      this.id = +res.get('id');

    });
    this.filtroSolicitacaoMudanca.projetoId = this.id;
    this.filtroSolicitacaoMudanca.ativo = true;
    this.svc.listar(SolicitacaoMudanca, this.filtroSolicitacaoMudanca)
      .toPromise().then(
        (result) => {
          this.solicitacaoMudancas = result.data;
          this.totalSolicitacaoMudancas = this.solicitacaoMudancas.length;
        }
      );
    this.svc.listar(FaseModel, this.filtroSolicitacaoMudanca)
      .toPromise().then(
        (result) => {
          this.fases = result.data;
          this.totalFases = this.fases.length;
        }
      );

    if (this.id > 0) {
      this.filtroProjeto.id = this.id;

      this.svc.obter(this.filtroProjeto)
        .toPromise().then(
          (result) => {
            this.projeto = result.data;
            this.formDados.OpenView(this.projeto);
            this.formAtribuicaoEquipe.OpenView(this.projeto);

            this.statusAtual.id = this.projeto.statusId;
            this.pegarStatus();
          },
          (error) => {
          }
        );
    }
  }

  modoEdicao() {
    return this.projeto !== null && this.projeto !== undefined && this.projeto.id > 0;
  }

  cancelar() {
    this.router.navigate(['/projetos']);
  }
  Adicionar() {
    this.formDados.Adicionar();
  }
  selectTab(dados: any) {
    let projeto: Projeto = JSON.parse(dados);
    this.formAtribuicaoEquipe.OpenView(projeto);
    this.alterarTabs.tabs[1].active = true;
  }

  novaSolicitacaoMudanca() {
    this.router.navigate([`template/projetos/novo-projeto/solicitacao-mudanca/${this.id}`]);
  }

  vaiParaFase() {
    this.router.navigate([`projetos/novo-projeto/fase/${this.id}`]);
  }

  pegarStatus() {
    this.svc.obter(this.statusAtual)
      .toPromise().then(
        (result) => {
          this.statusAtual = result.data;
        },
        (error) => {

        }
      );
  }

  vaiParaSolicitacaoMudanca() {
    this.router.navigate([`projetos/novo-projeto/solicitacao-mudanca/${this.id}`]);
  }
}