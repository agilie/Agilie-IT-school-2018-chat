import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import {map} from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router) {

  }

  canActivate() {
    return this.auth.authState.pipe(map(authState => {
      if (!authState) {
        this.router.navigate(['/']);
      }
      return !!authState;
    }));
  }

}
