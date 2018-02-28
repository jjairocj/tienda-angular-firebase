import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase';
import {Users} from '../models/users';


@Injectable()
export class AuthService {

  user: Observable<Users>;

  constructor(private  afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.user = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<Users>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credentials => {
        this.router.navigate(['/shop']);
      });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  emailAndPassword(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email.value(), password.value());
  }

  signUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email.value(), password.value());
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
