import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _authorized = !!window.sessionStorage.getItem('_authorized');
  private _login = 'login';
  private _password = 'password';
  constructor() { }

  login(data) {
    this._authorized = data.login === this._login && data.password === this._password;
    if (this._authorized) {
      window.sessionStorage.setItem('_authorized', 'true');
    } else {
      window.sessionStorage.removeItem('_authorized');
    }
    return this._authorized;
  }

  isAuthorized() {
    return this._authorized;
  }
}
