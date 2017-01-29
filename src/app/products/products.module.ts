import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../common/services/product/product.service';
import { ProductsComponent } from './products.component';
import { OrderByPipe } from '../common/pipes/order-by/order-by.pipe';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../common/pipes/filter/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ProductsComponent, OrderByPipe, FilterPipe],
  providers: [ProductService],
  exports: [ProductsComponent]
})
export class ProductsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProductsModule,
      providers: [ProductService]
    }
  }
}
