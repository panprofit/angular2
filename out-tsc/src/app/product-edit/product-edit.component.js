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
import { ProductService } from '../common/services/product/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from './product.model';
import { DatePipe } from '@angular/common';
export var ProductEditComponent = (function () {
    function ProductEditComponent(productService, fb, route, router) {
        this.productService = productService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.product = new ProductModel();
        this.forbidden = false;
    }
    ProductEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.productForm.valueChanges
            .subscribe(function (values) { return _this.forbidden = false; });
    };
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var data = _this.productService.find(params['id']) || {};
            if (params['id'] && !data.id) {
                _this.router.navigate(['/products']);
            }
            Object.assign(_this.product, data);
            var datePipe = new DatePipe('en-US');
            _this.productForm = _this.fb.group({
                sku: [_this.product.sku, Validators.required],
                name: [_this.product.name, Validators.required],
                price: [_this.product.price / 100, Validators.required],
                createdAt: [{ value: datePipe.transform(_this.product.createdAt, 'y-MM-dd HH:mm'), disabled: true }]
            });
        });
    };
    ProductEditComponent.prototype.doSave = function () {
        this.productForm.value.price *= 100;
        if (this.productService.save(Object.assign({}, this.product, this.productForm.value))) {
            window.history.back();
        }
        else {
            this.forbidden = true;
        }
    };
    ProductEditComponent = __decorate([
        Component({
            selector: 'app-product-edit',
            templateUrl: './product-edit.component.html',
            styleUrls: ['./product-edit.component.css']
        }), 
        __metadata('design:paramtypes', [ProductService, FormBuilder, ActivatedRoute, Router])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/product-edit/product-edit.component.js.map