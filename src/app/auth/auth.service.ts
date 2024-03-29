import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import {
  API_URL,
  LOGIN_ENDPOINT,
  REGISTER_ENDPOINT,
} from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  requestLogin(username: String | null, password: String | null) {
    return this.http.post<LoginResult>(`${API_URL}${LOGIN_ENDPOINT}`, {
      username,
      password,
    });
  }

  setToken(token: JSONWebToken) {
    localStorage.setItem('auth', token);
    return this.isTokenAvailable();
  }

  getToken() {
    return localStorage.getItem('auth');
  }

  isTokenAvailable() {
    return Boolean(this.getToken());
  }

  removeToken() {
    localStorage.removeItem('auth');
    return !this.isTokenAvailable();
  }

  setUsername(username: string) {
    localStorage.setItem('username', username);
    return this.isUsernameAvailable();
  }

  isUsernameAvailable() {
    return Boolean(this.getToken());
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  removeUsername() {
    localStorage.removeItem('username');
    return !this.isUsernameAvailable();
  }

  requestRegister(
    username: String | null,
    password: String | null,
    repeatPassword: String | null,
    email: String | null,
  ) {
    return this.http.post<RegisterResult>(`${API_URL}${REGISTER_ENDPOINT}`, {
      username,
      password,
      repeatPassword,
      email,
    });
  }
}
