import { async, TestBed } from '@angular/core/testing';
import { ProductEditComponent } from './product-edit.component';
describe('ProductEditComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProductEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProductEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/product-edit/product-edit.component.spec.js.map