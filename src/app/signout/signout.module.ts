import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SignOutPage } from './signout.page';

import { SignOutPageRoutingModule } from './signout-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignOutPageRoutingModule
  ],
  declarations: [SignOutPage]
})
export class SignOutPageModule {}
