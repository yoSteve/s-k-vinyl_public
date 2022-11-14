import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { Store } from '@ngxs/store';
import { SetUser } from '@app/store/app.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(public fireAuth: AngularFireAuth, public router: Router, private errorHandler: ErrorHandlerService, private store: Store) {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
        store.dispatch(new SetUser(JSON.stringify(user)));
      }
    });
  }

  login(email: string, password: string): Observable<any> {
    return from(this.fireAuth.auth.signInWithEmailAndPassword(email, password))
      .pipe(catchError(this.errorHandler.handleError));
  }

  logout(): Observable<any> {
    return from(this.fireAuth.auth.signOut())
      .pipe(
        tap(() => this.isLoggedIn = false),
        catchError(this.errorHandler.handleError)
      );
  }

}
