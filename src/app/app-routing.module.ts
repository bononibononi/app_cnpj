import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnpjComponent } from './components/cnpj/cnpj/cnpj.component';

const routes: Routes = [
  {path: 'cnpj', component: CnpjComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
