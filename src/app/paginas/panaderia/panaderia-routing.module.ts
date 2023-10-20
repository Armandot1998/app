import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanaderiaPage } from './panaderia.page';

const routes: Routes = [
  {
    path: '',
    component: PanaderiaPage
  },
  {
    path: 'enrollado',
    loadChildren: () => import('./enrollado/enrollado.module').then( m => m.EnrolladoPageModule)
  },
  {
    path: 'reventado',
    loadChildren: () => import('./reventado/reventado.module').then( m => m.ReventadoPageModule)
  },
  {
    path: 'gusanito',
    loadChildren: () => import('./gusanito/gusanito.module').then( m => m.GusanitoPageModule)
  },
  {
    path: 'gusanito-queso',
    loadChildren: () => import('./gusanito-queso/gusanito-queso.module').then( m => m.GusanitoQuesoPageModule)
  },
  {
    path: 'dulce',
    loadChildren: () => import('./dulce/dulce.module').then( m => m.DulcePageModule)
  },
  {
    path: 'dulce',
    loadChildren: () => import('./dulce/dulce.module').then( m => m.DulcePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanaderiaPageRoutingModule {}
