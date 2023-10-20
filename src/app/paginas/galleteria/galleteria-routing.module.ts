import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleteriaPage } from './galleteria.page';

const routes: Routes = [
  {
    path: '',
    component: GalleteriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleteriaPageRoutingModule {}
