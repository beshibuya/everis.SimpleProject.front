import { AlterarSenhaComponent } from './Home/meus-dados/Alterar-senha/alterar-senha/alterar-senha.component';
import { MeusDadosComponent } from './Home/meus-dados/meus-dados.component';
import { AtribuicaoEquipeComponent } from './Home/Projetos/actions/novo-projeto/actions/atribuicao-equipe/atribuicao-equipe.component';
import { FechamentoProjetoComponent } from './Home/Projetos/actions/fechamento-projeto/fechamento-projeto.component';
import { NovaSolicitacaoMudanca } from './Home/Projetos/actions/nova-solicitacao-mudanca/nova-solicitacao-mudanca.component';
import { PessoasComponent } from './Home/Pessoas/pessoas.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelosComponent } from './shared/modelos/modelos.component';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { EsforcoProjetoComponent } from './Home/Projetos/actions/esforco-projeto/esforco-projeto.component';
import { LoginComponent } from './Home/Login/login/login.component';
import { DadosPrincipaisComponent } from './Home/Projetos/actions/novo-projeto/actions/dados-principais/dados-principais.component';
import { ProjetosComponent } from './Home/Projetos/projetos.component';
import { EsqueceuSenhaComponent } from './Home/Login/esqueceu-senha/esqueceu-senha.component';
import { PrimeiroAcessoComponent } from './Home/Login/primeiro-acesso/primeiro-acesso.component';
import { CadastroPessoasComponent } from './Home/Pessoas/actions/cadastro-pessoas/cadastro-pessoas.component';
import { NovoProjetoComponent } from './Home/Projetos/actions/novo-projeto/novo-projeto.component';
import { AnexosComponent } from './Home/Projetos/actions/novo-projeto/actions/anexos/anexos.component';
import { EmpresaComponent } from './Home/Empresa/empresa.component';
import { DashboardComponent } from './Home/Dashboard/dashboard/dashboard.component';
import { NovoEsforcoProjetoComponent } from './Home/Projetos/actions/novo-esforco-projeto/novo-esforco-projeto.component';
import { MapaSiteComponent } from './Home/mapa-site/mapa-site.component';
import { NovaEmpresaComponent } from './Home/Empresa/nova-empresa/nova-empresa.component';
import { LoaderComponent } from './core/loader/loader.component';
<<<<<<< HEAD
import { AuthGuard } from './shared/guard/auth.guard';
=======
import { ComunidadesComponent } from './Home/Comunidades/comunidades/comunidades.component';
import { SolicitacaoMudancaComponent } from './Home/Projetos/actions/solicitacao-mudanca/solicitacao-mudanca.component';
>>>>>>> dev_2019_jan


const appRoutes: Routes = [
  {
    path: 'loader',
    component: LoaderComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'modelos',
    component: ModelosComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'novo-projeto',
    component: NovoProjetoComponent, canActivate: [AuthGuard] 
  },
  {
    path: '*',
    component: AppComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'meus-dados',
    component: MeusDadosComponent
  },
  {
    path: 'pessoas',
<<<<<<< HEAD
    component: PessoasComponent, canActivate: [AuthGuard] ,
       children: [
       {
           path: 'cadastro-pessoas', component: CadastroPessoasComponent, canActivate: [AuthGuard] }
=======
    component: PessoasComponent,
    children: [
      {
        path: 'cadastro-pessoas', component: CadastroPessoasComponent
      }
>>>>>>> dev_2019_jan
    ],
  },
  {
    path: 'projetos',
    component: ProjetosComponent, canActivate: [AuthGuard] ,
    children: [
<<<<<<< HEAD
      { path: 'novo-projeto', component: NovoProjetoComponent, canActivate: [AuthGuard] },
      { path: 'novo-projeto/changes', component: ChangesComponent, canActivate: [AuthGuard]  },
   ],
=======
      { path: 'novo-projeto', component: NovoProjetoComponent },
      { path: 'novo-projeto/solicitacaomudanca', component: SolicitacaoMudancaComponent },
    ],
>>>>>>> dev_2019_jan
  },
  {
    path: 'template',
    component: TemplateComponent, canActivate: [AuthGuard] ,
    children: [

<<<<<<< HEAD
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

      { path: 'pessoas', component: PessoasComponent, canActivate: [AuthGuard] },
      { path: 'pessoas/cadastro-pessoas', component: CadastroPessoasComponent, canActivate: [AuthGuard] },

      { path: 'projetos', component: ProjetosComponent, canActivate: [AuthGuard] },
      { path: 'projetos/novo-projeto', component: NovoProjetoComponent, canActivate: [AuthGuard]  },
      { path: 'projetos/novo-projeto/changes', component: ChangesComponent, canActivate: [AuthGuard]   },
      { path: 'projetos/novo-projeto/changes/nova-change', component: NovaChangeComponent, canActivate: [AuthGuard]   },
      { path: 'projetos/novo-projeto/esforco-projeto', component: EsforcoProjetoComponent, canActivate: [AuthGuard]  },
      { path: 'projetos/novo-projeto/esforco-projeto/novo-esforco-projeto', component: NovoEsforcoProjetoComponent, canActivate: [AuthGuard]  },


      { path: 'novo-projeto', component: NovoProjetoComponent, canActivate: [AuthGuard]  },
      { path: 'mapa-site', component: MapaSiteComponent, canActivate: [AuthGuard]  },
      { path: 'modelos', component: ModelosComponent, canActivate: [AuthGuard] },

      { path: 'empresa/nova-empresa', component: NovaEmpresaComponent, canActivate: [AuthGuard] },
      { path: 'empresa', component: EmpresaComponent, canActivate: [AuthGuard] },
      ],
=======
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent, data: {
        breadcrumb: 'Dashboard'} },

      { path: 'pessoas', component: PessoasComponent },
      { path: 'pessoas/cadastro-pessoas', component: CadastroPessoasComponent },

      {
        path: 'projetos', component: ProjetosComponent, data: {
          breadcrumb: 'Projetos'
        },
      },
      { path: 'projetos/novo-projeto', component: NovoProjetoComponent },
      { path: 'projetos/novo-projeto/:id', component: NovoProjetoComponent },
      { path: 'projetos/novo-projeto/solicitacao-mudanca/:id', component: SolicitacaoMudancaComponent },
      { path: 'projetos/novo-projeto/solicitacao-mudanca/nova-solicitacao-mudanca/:id', component: NovaSolicitacaoMudanca },
      { path: 'projetos/novo-projeto/solicitacao-mudanca/nova-solicitacao-mudanca/:id/:id2', component: NovaSolicitacaoMudanca },
      { path: 'projetos/novo-projeto/esforco-projeto', component: EsforcoProjetoComponent },
      { path: 'projetos/novo-projeto/esforco-projeto/:id', component: EsforcoProjetoComponent },
      { path: 'projetos/novo-projeto/esforco-projeto/novo-esforco-projeto', component: NovoEsforcoProjetoComponent },

      { path: 'comunidades', component: ComunidadesComponent },


    {path: 'novo-projeto', component: NovoProjetoComponent },
    {path: 'mapa-site', component: MapaSiteComponent },
    {path: 'modelos', component: ModelosComponent},
    {path: 'meus-dados', component: MeusDadosComponent},
    {path: 'meus-dados/alterar-senha', component: AlterarSenhaComponent},

      { path: 'empresa/cadastro-empresa', component: NovaEmpresaComponent },
      { path: 'empresa/cadastro-empresa/:id', component: NovaEmpresaComponent },
      { path: 'empresa', component: EmpresaComponent },
      { path: 'empresa:sucesso', component: EmpresaComponent },
    ],
>>>>>>> dev_2019_jan

  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
<<<<<<< HEAD
      { path: 'template', component: TemplateComponent, canActivate: [AuthGuard] },
=======
      { path: 'template', component: TemplateComponent },
>>>>>>> dev_2019_jan
    ],
  },
  {
    path: 'mapa-site',
    component: MapaSiteComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'esqueci-senha',
    component: EsqueceuSenhaComponent
  },
  {
    path: 'primeiro-acesso',
    component: PrimeiroAcessoComponent
  },
  {
    path: 'novo-projeto', component: NovoProjetoComponent, canActivate: [AuthGuard] ,
    children: [
<<<<<<< HEAD
      { path: '', redirectTo: 'dados-principais', pathMatch: 'full', canActivate: [AuthGuard]  },
      { path: 'dados-principais', component: DadosPrincipaisComponent, canActivate: [AuthGuard]  },
      { path: 'atribuicao-equipe', component: AtribuicaoEquipeComponent, canActivate: [AuthGuard]  },
       ],
=======
      { path: '', redirectTo: 'dados-principais', pathMatch: 'full' },
      { path: 'dados-principais', component: DadosPrincipaisComponent },
      { path: 'atribuicao-equipe', component: AtribuicaoEquipeComponent },
    ],
>>>>>>> dev_2019_jan
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'fechamento-projeto',
    component: FechamentoProjetoComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'anexos',
    component: AnexosComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'empresa',
    component: EmpresaComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'nova-empresa',
    component: NovaEmpresaComponent, canActivate: [AuthGuard] 
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
      // ,{ enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
