import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { UserModuleModule } from './user-module/user-module.module';
import { ProductModuleModule } from './product-module/product-module.module';
import { ClientModuleModule } from './client-module/client-module.module';
import { BillingModuleModule } from './billing-module/billing-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    UserModuleModule,
    ProductModuleModule,
    ClientModuleModule,
    BillingModuleModule

  ]
})
export class ComponentsModule { }
