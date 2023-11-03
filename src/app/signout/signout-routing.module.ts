import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignOutPage } from './signout.page';

const routes: Routes = [
  {
    path: '',
    component: SignOutPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignOutPageRoutingModule {}
