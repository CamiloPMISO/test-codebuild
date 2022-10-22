import { LOCALSTORAGE_TOKEN_KEY } from '../../app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../interfaces';

export const fakeRegisterResponse: RegisterResponse = {
  status: 200,
  message: 'Registration sucessfull.',
};

export const fakeLoginResponse: LoginResponse = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  status: 200,
  message: 'login sucessfull.',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private jwtService: JwtHelperService
  ) {}

  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    // TODO
    return of(fakeRegisterResponse).pipe(
      tap((res: RegisterResponse) =>
        this.snackbar.open(`Usuario registrado exitosamente`, 'Close', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        })
      )
    );
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return of(fakeLoginResponse).pipe(
      tap((res: LoginResponse) =>
        localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken)
      )
    );
  }
  /*
   Get the user fromt the token payload
   */
  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}
