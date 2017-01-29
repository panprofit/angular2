var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './common/services/user/user.service';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { routing } from './app.routing';
import { CanActivateViaAuthGuard } from './app.routing.guard';
import { AlreadyAuthorized } from './app.routing.authorized';
import { LoginModule } from './login/login.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ProductEditModule } from './product-edit/product-edit.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmDialogComponent } from './common/components/confirm-dialog/confirm-dialog.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                ConfirmDialogComponent
            ],
            imports: [
                BrowserModule,
                ProductsModule.forRoot(),
                ProductDetailModule,
                ProductEditModule,
                LoginModule.forRoot(),
                BootstrapModalModule,
                routing
            ],
            providers: [
                UserService,
                CanActivateViaAuthGuard,
                AlreadyAuthorized
            ],
            entryComponents: [
                ConfirmDialogComponent
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/app.module.js.map