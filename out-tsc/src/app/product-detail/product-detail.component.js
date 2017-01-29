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
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'ng2-bootstrap-modal';
import { ConfirmDialogComponent } from '../common/components/confirm-dialog/confirm-dialog.component';
export var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, route, router, dialogService) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.product = _this.productService.find(params['id']) || {};
            if (!_this.product.sku) {
                _this.router.navigate(['/products']);
            }
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        if (this.disposable) {
            this.disposable.unsubscribe();
        }
    };
    ProductDetailComponent.prototype.doRemove = function () {
        var _this = this;
        this.disposable = this.dialogService.addDialog(ConfirmDialogComponent, {
            title: 'Remove product',
            message: 'Are you sure?'
        })
            .subscribe(function (isConfirmed) {
            if (isConfirmed) {
                _this.productService.remove(_this.product.id);
                _this.router.navigate(['/products']);
            }
        });
    };
    ProductDetailComponent = __decorate([
        Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.css']
        }), 
        __metadata('design:paramtypes', [ProductService, ActivatedRoute, Router, DialogService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/product-detail/product-detail.component.js.map