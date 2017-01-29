import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './common/services/user/user.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate() {
    const auth = this.userService.isAuthorized();
    if (!auth) {
      console.error('You are not authorized!');
      this.router.navigate(['/login']);
    }
    return auth;
  }
}
