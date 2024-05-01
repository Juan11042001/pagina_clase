import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'ejemplo2',
  loadChildren: ()=> import('./ejemplo2/ejemplo2.module').then(m=>m.Ejemplo2Module)




}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ejemplo1RoutingModule { }
