import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireStorage} from 'angularfire2/storage';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.user.subscribe(user => this.user = user);
  }

  changeAvatar(event) {
    this.user.avatar = event.target.files[0];
  }

}
