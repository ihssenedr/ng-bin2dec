import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '' , pathMatch : 'full', redirectTo: 'converteur'},
    {
      path : 'converteur',
      loadChildren : () => import('./converteur/converteur.module').then(m => m.ConverteurModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
