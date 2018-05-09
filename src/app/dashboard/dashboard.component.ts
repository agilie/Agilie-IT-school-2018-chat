import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  messages: Observable<any[]>;
  user: firebase.User;

  constructor(private db: AngularFireDatabase,
              private auth: AngularFireAuth) {
  }

  ngOnInit() {
    this.messages = this.db.list('/messages').valueChanges();
    this.auth.authState.subscribe(user => this.user = user);
  }

  sendMessage(message) {
    this.db.list('/messages').push({
      message: message.value,
      user: {
        name: this.user.displayName,
        email: this.user.email,
        avatar: this.user.photoURL
      }
    }).then(() => message.value = '',
      (error) => alert(error));
  }

}
