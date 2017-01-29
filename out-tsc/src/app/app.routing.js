import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CanActivateViaAuthGuard } from './app.routing.guard';
import { AlreadyAuthorized } from './app.routing.authorized';
var routes = [
    { path: '', component: LoginComponent, canActivate: [AlreadyAuthorized] },
    { path: 'login', component: LoginComponent, canActivate: [AlreadyAuthorized] },
    { path: 'products', component: ProductsComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: 'products/new', component: ProductEditComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: 'products/:id', component: ProductDetailComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: 'products/:id/edit', component: ProductEditComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: '**', redirectTo: '' }
];
export var routing = RouterModule.forRoot(routes);
//# sourceMappingURL=/home/user/Projects/angular2/src/src/app/app.routing.js.map