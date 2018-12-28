import { AtribuicaoEquipeComponent } from './Home/Projetos/actions/novo-projeto/actions/atribuicao-equipe/atribuicao-equipe.component';
import { FechamentoProjetoComponent } from './Home/Projetos/actions/fechamento-projeto/fechamento-projeto.component';
import { NovaChangeComponent } from './Home/Projetos/actions/nova-change/nova-change.component';
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
import { ChangesComponent } from './Home/Projetos/actions/changes/changes.component';

const appRoutes: Routes = [
  {
    path: 'modelos',
    component: ModelosComponent
  },
  {
    path: 'novo-projeto',
    component: NovoProjetoComponent
  },
  {
    path: '*',
    component: AppComponent
  },
  {
    path: 'pessoas',
    component: PessoasComponent,
       children: [
       {path: 'cadastro-pessoas', component: CadastroPessoasComponent}
    ],
  },
  {
    path: 'projetos',
    component: ProjetosComponent,
    children: [
      {path: 'novo-projeto', component: NovoProjetoComponent},
      {path: 'novo-projeto/changes', component: ChangesComponent },
   ],
  },
  {
    path: 'template',
    component: TemplateComponent,
    children: [
    {path: 'pessoas', component: PessoasComponent},
    {path: 'pessoas/cadastro-pessoas', component: CadastroPessoasComponent},
    {path: 'projetos', component: ProjetosComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'novo-projeto', component: NovoProjetoComponent },
    {path: 'projetos/novo-projeto', component: NovoProjetoComponent },
    {path: 'projetos/novo-projeto/changes', component: ChangesComponent  },
    {path: 'projetos/novo-projeto/changes/nova-change', component: NovaChangeComponent  },
    {path: 'modelos', component: ModelosComponent},
      ],

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nova-change',
    component: NovaChangeComponent
  },
  {
    path: 'esforco-projeto',
    component: EsforcoProjetoComponent
  },
  {
    path: 'changes',
    component: ChangesComponent
    },
  {
    path: 'dados-principais',
    component: DadosPrincipaisComponent
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
    path: 'cadastro-pessoas',
    component: CadastroPessoasComponent
  },
  {
    path: 'novo-projeto', component: NovoProjetoComponent,
    children: [
      { path: '', redirectTo: 'dados-principais', pathMatch: 'full' },
      { path: 'dados-principais', component: DadosPrincipaisComponent },
      { path: 'atribuicao-equipe', component: AtribuicaoEquipeComponent },
       ],
  },
  { path: '',   redirectTo: '/template', pathMatch: 'full' },
  {
    path: 'fechamento-projeto',
    component: FechamentoProjetoComponent
  },
  {
    path: 'anexos',
    component: AnexosComponent
  },
  {
    path: 'empresa',
    component: EmpresaComponent
  }
 ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
