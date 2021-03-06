import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ProductsService } from './products.service';
import { ModuleComponent } from '../module/module.component';

@NgModule({
  declarations: [StoreComponent, ModuleComponent],
  imports: [CommonModule, HttpClientModule, StoreRoutingModule],
  providers: [ProductsService]
})
export class StoreModule {}
