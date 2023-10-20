import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialesPageRoutingModule } from './especiales-routing.module';

import { EspecialesPage } from './especiales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialesPageRoutingModule
  ],
  declarations: [EspecialesPage]
})
export class EspecialesPageModule {}
