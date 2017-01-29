var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
export var ConfirmDialogComponent = (function (_super) {
    __extends(ConfirmDialogComponent, _super);
    function ConfirmDialogComponent(dialogService) {
        _super.call(this, dialogService);
    }
    ConfirmDialogComponent.prototype.confirm = function () {
        this.result = true;
        this.close();
    };
    ConfirmDialogComponent = __decorate([
        Component({
            selector: 'app-confirm-dialog',
            templateUrl: 'confirm-dialog.component.html',
            styleUrls: ['confirm-dialog.component.css']
        }), 
        __metadata('design:paramtypes', [DialogService])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}(DialogComponent));
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/common/components/confirm-dialog/confirm-dialog.component.js.map