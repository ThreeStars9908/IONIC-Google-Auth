import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-signout',
  templateUrl: 'signout.page.html',
  styleUrls: ['signout.page.scss'],
})
export class SignOutPage {

  constructor() {}

  public async signIn(){
    let googleUser = await GoogleAuth.signIn();
    
    console.log(googleUser);
  }

  public signOut(){
    GoogleAuth.signOut();
  }

}
