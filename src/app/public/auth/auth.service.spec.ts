import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { JwtModule } from '@auth0/angular-jwt';

export const LOCALSTORAGE_TOKEN_KEY = 'sport_app_token';

export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: ['localhost:3000', 'localhost:8080']
          }
        })]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
