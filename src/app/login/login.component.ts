import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../common/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements AfterViewInit {
  public loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });
  public forbidden = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private user: UserService
  ) {}

  ngAfterViewInit() {
    this.loginForm.valueChanges
      .subscribe(values => this.forbidden = false);
  }

  doLogin() {
    if (this.user.login(this.loginForm.value)) {
      this.router.navigate(['/products']);
    } else {
      this.forbidden = true;
    }
  }
}
