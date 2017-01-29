import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from '../common/services/product/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductModel } from './product.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit, AfterViewInit {
  private product: ProductModel = new ProductModel();
  public productForm;
  public forbidden = false;
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.productForm.valueChanges
      .subscribe(values => this.forbidden = false);
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        const data = this.productService.find(params['id']) || {};
        if (params['id'] && !data.id) {
          this.router.navigate(['/products']);
        }
        Object.assign(this.product, data);
        const datePipe = new DatePipe('en-US');
        this.productForm = this.fb.group({
          sku: [this.product.sku, Validators.required],
          name: [this.product.name, Validators.required],
          price: [this.product.price / 100, Validators.required],
          createdAt: [{value: datePipe.transform(this.product.createdAt, 'y-MM-dd HH:mm'), disabled: true}]
        });
      });
  }

  doSave() {
    this.productForm.value.price *= 100;
    if (this.productService.save(Object.assign({}, this.product, this.productForm.value))) {
      window.history.back();
    } else {
      this.forbidden = true;
    }
  }
}
