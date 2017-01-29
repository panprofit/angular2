import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../common/services/product/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DialogService } from 'ng2-bootstrap-modal';
import { ConfirmDialogComponent } from '../common/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private product;
  private disposable;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.product = this.productService.find(params['id']) || {};
        if (!this.product.sku) {
          this.router.navigate(['/products']);
        }
      });
  }

  ngOnDestroy() {
    if (this.disposable) {
      this.disposable.unsubscribe();
    }
  }

  doRemove() {
    this.disposable = this.dialogService.addDialog(ConfirmDialogComponent, {
      title: 'Remove product',
      message: 'Are you sure?'
    })
    .subscribe((isConfirmed)=>{
      if(isConfirmed) {
        this.productService.remove(this.product.id);
        this.router.navigate(['/products']);
      }
    });

  }
}
