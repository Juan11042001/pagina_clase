import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
{
  path:'form/:id',
component:CategoryFormComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Category2RoutingModule {


}
