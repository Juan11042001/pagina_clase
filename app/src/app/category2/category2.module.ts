import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category2RoutingModule } from './category2-routing.module';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [
    CategoryFormComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    Category2RoutingModule
  ]
})
export class Category2Module { }
