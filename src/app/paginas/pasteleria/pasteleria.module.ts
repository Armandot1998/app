import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasteleriaPageRoutingModule } from './pasteleria-routing.module';

import { PasteleriaPage } from './pasteleria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasteleriaPageRoutingModule
  ],
  declarations: [PasteleriaPage]
})
export class PasteleriaPageModule {}
