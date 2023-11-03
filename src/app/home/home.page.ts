import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Client, Databases, ID, Query } from 'appwrite';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private client = new Client();
  public flag_login: boolean = false;
  public img_url:string = "";
  public user_email:string = "";
  private databases = new Databases(this.client);
  constructor() { 
    this.client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('6539194a08e39b82740a')
  }

  public async signIn(){
    let googleUser = await GoogleAuth.signIn();

    if(googleUser.authentication){
      this.flag_login = true;
      this.img_url = googleUser.imageUrl;
      this.user_email = googleUser.email;
    }
    const collectionId = '6539198fc3eacaebee7c';
    const databaseID = "65391986635a2e6bd9fd";
    const insertData = {
      username: googleUser.email,
    }
    const documents = await this.databases.listDocuments(databaseID,collectionId);

    const specificDocument = documents.documents.find(doc => doc['username'] === googleUser.email);

    if (specificDocument) {
      console.log('Specific document:', specificDocument);
    } else {
      console.log('Document not found');
      this.databases.createDocument(databaseID,collectionId, ID.unique(),insertData)
        .then((res) => {
          console.log('Documents retrieved:', res);
          return res;
        })
        .catch((error) => {
          console.error('Error retrieving documents:', error);
          throw error;
        });
    }
    
    console.log('user_login', this.flag_login);
      
    console.log('Result:', googleUser);
  }

  public async signOut(){
    let info = await GoogleAuth.signOut();
    this.flag_login = false;
  }

}