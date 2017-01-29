import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../common/services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'ng2-bootstrap-modal';
import { ConfirmDialogComponent } from '../common/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products = [];
  public sort: string;
  public filter: string;
  private disposable;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.products = this.productService.getList();
    this.sort = this.route.snapshot.queryParams['sort'] || 'sku';
    this.filter = this.route.snapshot.queryParams['filter'] || '';
  }

  ngOnDestroy() {
    if (this.disposable) {
      this.disposable.unsubscribe();
    }
  }

  doRemove(id) {
    this.disposable = this.dialogService.addDialog(ConfirmDialogComponent, {
      title: 'Remove product',
      message: 'Are you sure?'
    })
    .subscribe((isConfirmed)=>{
      if(isConfirmed) {
        this.productService.remove(id);
        const _filter = this.filter;
        this.filter = '';
        setTimeout(() => this.filter = _filter, 1);
      }
    });
  }

  doSort(sort?) {
    if (sort) {
      if (this.sort.indexOf(sort) > -1) {
        sort = (this.sort[0] === '-' ? '' : '-') + sort;
      }
      this.sort = sort;
    }
    this.router.navigate([], {
      queryParams: { sort: this.sort, filter: this.filter }
    });
  }

}
