import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BinaryValidatorDirective } from './directives/binary-validator.directive';

const routes: Routes = [
  {path: '' , component : fromContainers.ConverteurComponent},

];

@NgModule({
  declarations: [
    ...fromContainers.containers,
    BinaryValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ConverteurModule { }
