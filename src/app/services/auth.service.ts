import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router,
              private ngZone: NgZone) {

  }

  facebookSignIn() {
    this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    ).then(() => this.ngZone.run(
      () => this.router.navigate(['dashboard'])
    ));
  }

  emailSignIn(email, password) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['dashboard']));
  }

  emailSignUp(email, password) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['dashboard']));
  }

}
