import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { MiComponente2Component } from './mi-componente2/mi-componente2.component';

const routes: Routes = [
  /*{
  path: 'xyz',
component: MiComponente2Component

  },*/
  {
    path: 'xyz',
  component: MiComponenteComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiModuloRoutingModule { }
