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
export var ProductService = (function () {
    function ProductService() {
        this._products = [];
        this._key = '__products__';
        this._counter = '__counter__';
    }
    ProductService.prototype.save = function (product) {
        var _product = this.find(product.id);
        if (!_product) {
            product.id = this.getCounter();
            this._products.push(product);
        }
        else if (product.id === _product.id) {
            Object.assign(_product, product);
        }
        else {
            return false;
        }
        this._set();
        return true;
    };
    ProductService.prototype._get = function () {
        return JSON.parse(window.localStorage.getItem(this._key));
    };
    ProductService.prototype._set = function () {
        window.localStorage.setItem(this._key, JSON.stringify(this._products));
    };
    ProductService.prototype.find = function (id) {
        return this.getList().find(function (item) { return item.id === id; });
    };
    ProductService.prototype.getList = function () {
        this._products = (this._products && this._products.length ? this._products : this._get()) || [];
        return this._products;
    };
    ProductService.prototype.getCounter = function () {
        var counter = +window.localStorage.getItem(this._counter) || 0;
        counter += 1;
        window.localStorage.setItem(this._counter, JSON.stringify(counter));
        return '' + counter;
    };
    ProductService.prototype.remove = function (id) {
        var list = this.getList();
        var index = list.findIndex(function (item) { return item.id === id; });
        if (index < 0) {
            return false;
        }
        else {
            this._products.splice(index, 1);
            this._set();
            return true;
        }
    };
    ProductService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/common/services/product/product.service.js.map