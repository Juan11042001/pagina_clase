import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { NotFoundComponent } from './common/not-found/not-found.component';

const routes: Routes = [
{
  path: 'mi-modulo',
  loadChildren: () => import('./mi-modulo/mi-modulo.module').then(m => m.MiModuloModule)
},
{
  path: 'categories',
  loadChildren: ()=> import('./category/category.module').then(m => m.CategoryModule)
},
{
  path: 'ejemplo1',
  loadChildren: ()=> import('./ejemplo1/ejemplo1.module').then(m => m.Ejemplo1Module)
},
{
  path: 'auth',
  loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
},
{
path:'common',
loadChildren: ()=> import('./common/common.module').then(m => m.CommonModule)
},
{
path:'login',
redirectTo:'/auth/login'
},
{
path:'**',
component: NotFoundComponent
},
{
  path:'**',
  redirectTo:'./common/not-found'
}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
