import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CanActivateViaAuthGuard } from './app.routing.guard';
import { AlreadyAuthorized } from './app.routing.authorized';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [ AlreadyAuthorized ] },
  { path: 'login', component: LoginComponent, canActivate: [ AlreadyAuthorized ]},
  { path: 'products', component: ProductsComponent, canActivate: [ CanActivateViaAuthGuard ] },
  { path: 'products/new', component: ProductEditComponent, canActivate: [ CanActivateViaAuthGuard ] },
  { path: 'products/:id', component: ProductDetailComponent, canActivate: [ CanActivateViaAuthGuard ] },
  { path: 'products/:id/edit', component: ProductEditComponent, canActivate: [ CanActivateViaAuthGuard ] },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
