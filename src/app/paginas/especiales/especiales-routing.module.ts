import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialesPage } from './especiales.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialesPageRoutingModule {}
