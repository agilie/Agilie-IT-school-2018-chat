import {Injectable, Injector} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {AngularFireStorage} from 'angularfire2/storage';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private auth: AngularFireAuth, private injector: Injector) {

  }

  get user() {
    return this.auth.authState.pipe(map(event => {
      return new User(event, this.injector);
    }) );
  }

}

class User {

  fireUser: firebase.User;

  constructor(userData: firebase.User, private injector: Injector) {
    this.fireUser = userData;
  }

  get avatar() {
    return this.fireUser.photoURL;
  }

  set avatar(avatar) {
    if (typeof avatar === 'string') {
      this.fireUser.updateProfile({
        displayName: this.fireUser.displayName,
        photoURL: avatar
      });
    } else {
      const uploadTask = this.injector.get(AngularFireStorage)
        .upload(`user_${this.fireUser.email}_avatar.png`, avatar);
      uploadTask.downloadURL().subscribe(url => {
        this.fireUser.updateProfile({
          displayName: this.fireUser.displayName,
          photoURL: url
        });
      });
    }
  }

}
