import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReposteriaPage } from './reposteria.page';

const routes: Routes = [
  {
    path: '',
    component: ReposteriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReposteriaPageRoutingModule {}
