var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
export var UserService = (function () {
    function UserService() {
        this._authorized = !!window.sessionStorage.getItem('_authorized');
        this._login = 'login';
        this._password = 'password';
    }
    UserService.prototype.login = function (data) {
        this._authorized = data.login === this._login && data.password === this._password;
        if (this._authorized) {
            window.sessionStorage.setItem('_authorized', 'true');
        }
        else {
            window.sessionStorage.removeItem('_authorized');
        }
        return this._authorized;
    };
    UserService.prototype.isAuthorized = function () {
        return this._authorized;
    };
    UserService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/common/services/user/user.service.js.map