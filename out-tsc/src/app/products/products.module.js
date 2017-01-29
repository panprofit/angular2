var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../common/services/product/product.service';
import { ProductsComponent } from './products.component';
import { OrderByPipe } from '../common/pipes/order-by/order-by.pipe';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../common/pipes/filter/filter.pipe';
import { FormsModule } from '@angular/forms';
export var ProductsModule = (function () {
    function ProductsModule() {
    }
    ProductsModule.forRoot = function () {
        return {
            ngModule: ProductsModule,
            providers: [ProductService]
        };
    };
    ProductsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                FormsModule
            ],
            declarations: [ProductsComponent, OrderByPipe, FilterPipe],
            providers: [ProductService],
            exports: [ProductsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsModule);
    return ProductsModule;
}());
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/products/products.module.js.map