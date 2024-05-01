import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { MiComponente2Component } from '../mi-modulo/mi-componente2/mi-componente2.component';

const routes: Routes = [

{

  path:'',
  component:CategoryListComponent
},
{
path:'form/:id',
component:CategoryFormComponent
},
];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
