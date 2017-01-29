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
import { Router } from '@angular/router';
import { UserService } from './common/services/user/user.service';
export var AlreadyAuthorized = (function () {
    function AlreadyAuthorized(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AlreadyAuthorized.prototype.canActivate = function () {
        if (this.userService.isAuthorized()) {
            this.router.navigate(['/products']);
        }
        return true;
    };
    AlreadyAuthorized = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [UserService, Router])
    ], AlreadyAuthorized);
    return AlreadyAuthorized;
}());
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/app.routing.authorized.js.map