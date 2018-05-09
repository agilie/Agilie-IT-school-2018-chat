import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../environments/config';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {AuthService} from './services/auth.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { MessageComponent } from './dashboard/message/message.component';
import { SettingsComponent } from './settings/settings.component';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    MessageComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig, 'agilie-school-chat'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
