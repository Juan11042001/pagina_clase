import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ejemplo2RoutingModule } from './ejemplo2-routing.module';
import { EjemploComplementoComponent } from './ejemplo-complemento/ejemplo-complemento.component';


@NgModule({
  declarations: [
    EjemploComplementoComponent
  ],
  imports: [
    CommonModule,
    Ejemplo2RoutingModule
  ]
})
export class Ejemplo2Module { }
