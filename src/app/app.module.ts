import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './common/services/user/user.service';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { routing } from './app.routing';
import { CanActivateViaAuthGuard } from './app.routing.guard';
import { AlreadyAuthorized } from './app.routing.authorized';
import { LoginModule } from './login/login.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ProductEditModule } from './product-edit/product-edit.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmDialogComponent } from './common/components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule.forRoot(),
    ProductDetailModule,
    ProductEditModule,
    LoginModule.forRoot(),
    BootstrapModalModule,
    routing
  ],
  providers: [
    UserService,
    CanActivateViaAuthGuard,
    AlreadyAuthorized
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
