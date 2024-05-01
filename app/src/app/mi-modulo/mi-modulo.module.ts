import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiModuloRoutingModule } from './mi-modulo-routing.module';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { MiComponente2Component } from './mi-componente2/mi-componente2.component';

@NgModule({
  declarations: [
    MiComponenteComponent,
    MiComponente2Component
  ],
  imports: [
    CommonModule,
    MiModuloRoutingModule
  ]
})
export class MiModuloModule { }
