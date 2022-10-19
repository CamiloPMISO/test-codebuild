import { LOCALSTORAGE_TOKEN_KEY } from '../../app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterRequest, RegisterResponse } from '../interfaces';


export const fakeRegisterResponse: RegisterResponse = {
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  status: 200,
  message: 'Registration sucessfull.'
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtService: JwtHelperService
  ) { }

  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return of(fakeRegisterResponse).pipe(
      tap((res: RegisterResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken))
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
