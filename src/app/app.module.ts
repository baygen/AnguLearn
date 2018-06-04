import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppProduct } from './views/product/product.component';
import { AppInventory } from './views/inventory/inventory.component';

const appRoutes: Routes = [
  { path: 'Product', component: AppProduct },
  { path: 'Inventory', component: AppInventory },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    AppProduct,
    AppInventory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
