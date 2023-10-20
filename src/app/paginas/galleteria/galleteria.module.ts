import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleteriaPageRoutingModule } from './galleteria-routing.module';

import { GalleteriaPage } from './galleteria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleteriaPageRoutingModule
  ],
  declarations: [GalleteriaPage]
})
export class GalleteriaPageModule {}
