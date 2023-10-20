import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReposteriaPageRoutingModule } from './reposteria-routing.module';

import { ReposteriaPage } from './reposteria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReposteriaPageRoutingModule
  ],
  declarations: [ReposteriaPage]
})
export class ReposteriaPageModule {}
