import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  logIn() {
    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).
    // then(() => {
    //   console.log('logged in!');
    // });
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).
    then(() => {console.log('Logged In!'); });
  }
  logOut() {
    this.afAuth.auth.signOut().then(
      () => {
        console.log('Logged Out!');
      }
    );
  }
}
