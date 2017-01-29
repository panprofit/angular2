import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './common/services/user/user.service';

@Injectable()
export class AlreadyAuthorized implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate() {
    if (this.userService.isAuthorized()) {
      this.router.navigate(['/products']);
    }
    return true;
  }
}
