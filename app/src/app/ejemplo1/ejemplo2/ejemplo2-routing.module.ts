import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComplementoComponent } from './ejemplo-complemento/ejemplo-complemento.component';


const routes: Routes = [

  {
    path:'ejemplo-complemento',
    component:EjemploComplementoComponent

  }







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ejemplo2RoutingModule { }
