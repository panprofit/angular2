var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../common/services/user/user.service';
import { Router } from '@angular/router';
export var LoginComponent = (function () {
    function LoginComponent(router, fb, user) {
        this.router = router;
        this.fb = fb;
        this.user = user;
        this.loginForm = this.fb.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.forbidden = false;
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loginForm.valueChanges
            .subscribe(function (values) { return _this.forbidden = false; });
    };
    LoginComponent.prototype.doLogin = function () {
        if (this.user.login(this.loginForm.value)) {
            this.router.navigate(['/products']);
        }
        else {
            this.forbidden = true;
        }
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [Router, FormBuilder, UserService])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/login/login.component.js.map