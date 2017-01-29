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
export var ProductsComponent = (function () {
    function ProductsComponent(productService, route, router, dialogService) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
        this.products = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getList();
        this.sort = this.route.snapshot.queryParams['sort'] || 'sku';
        this.filter = this.route.snapshot.queryParams['filter'] || '';
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        if (this.disposable) {
            this.disposable.unsubscribe();
        }
    };
    ProductsComponent.prototype.doRemove = function (id) {
        var _this = this;
        this.disposable = this.dialogService.addDialog(ConfirmDialogComponent, {
            title: 'Remove product',
            message: 'Are you sure?'
        })
            .subscribe(function (isConfirmed) {
            if (isConfirmed) {
                _this.productService.remove(id);
                var _filter_1 = _this.filter;
                _this.filter = '';
                setTimeout(function () { return _this.filter = _filter_1; }, 1);
            }
        });
    };
    ProductsComponent.prototype.doSort = function (sort) {
        if (sort) {
            if (this.sort.indexOf(sort) > -1) {
                sort = (this.sort[0] === '-' ? '' : '-') + sort;
            }
            this.sort = sort;
        }
        this.router.navigate([], {
            queryParams: { sort: this.sort, filter: this.filter }
        });
    };
    ProductsComponent = __decorate([
        Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        }), 
        __metadata('design:paramtypes', [ProductService, ActivatedRoute, Router, DialogService])
    ], ProductsComponent);
    return ProductsComponent;
}());
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/products/products.component.js.map