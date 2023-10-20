import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasteleriaPage } from './pasteleria.page';

const routes: Routes = [
  {
    path: '',
    component: PasteleriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasteleriaPageRoutingModule {}
