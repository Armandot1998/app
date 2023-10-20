import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'panaderia',
    loadChildren: () => import('./paginas/panaderia/panaderia.module').then( m => m.PanaderiaPageModule)
  },
  {
    path: 'pasteleria',
    loadChildren: () => import('./paginas/pasteleria/pasteleria.module').then( m => m.PasteleriaPageModule)
  },
  {
    path: 'reposteria',
    loadChildren: () => import('./paginas/reposteria/reposteria.module').then( m => m.ReposteriaPageModule)
  },
  {
    path: 'galleteria',
    loadChildren: () => import('./paginas/galleteria/galleteria.module').then( m => m.GalleteriaPageModule)
  },
  {
    path: 'especiales',
    loadChildren: () => import('./paginas/especiales/especiales.module').then( m => m.EspecialesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
