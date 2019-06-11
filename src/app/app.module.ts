import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsDataService } from './products-data.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductsOverviewComponent,
    AddNewProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules}),

  ],
  providers: [ProductsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
