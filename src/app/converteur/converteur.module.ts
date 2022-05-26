import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from './containers';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '' , component : fromContainers.ConverteurComponent},

];

@NgModule({
  declarations: [
    ...fromContainers.containers
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ConverteurModule { }
