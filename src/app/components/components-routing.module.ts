import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from '../layouts/full/full.component';
import { UserFormComponent } from './user-module/user-form/user-form.component';
import { ProductFormComponent } from './product-module/product-form/product-form.component';
import { ClientFormComponent } from './client-module/client-form/client-form.component';
import { BillingFormComponent } from './billing-module/billing-form/billing-form.component';
import { BlankComponent } from '../layouts/blank/blank.component';

const routes: Routes = [
  {

    path:'admin',
    component:BlankComponent,
    children:[
      {
        path:'user',
        component: UserFormComponent,
        data:{
           title:'Admin | Usarios',
           urls:[
            {title: 'Dashboard', url: '/dashboard/admin'},
            { title:'Admin | Usarios'}
           ]
        }
       
      },
      {
        path: 'product',
        component: ProductFormComponent,
        data:{
          title:'Admin | Productos',
          urls:[
           {title: 'Dashboard', url: '/dashboard/admin'},
           { title:'Admin | Productos'}
          ]
       }
      },
      {
        path: 'client',
        component: ClientFormComponent,
        data:{
          title:'Admin | Clientes',
          urls:[
           {title: 'Dashboard', url: '/dashboard/admin'},
           { title:'Admin | Clientes'}
          ]
       }
      },
      {
        path: 'billing',
        component: BillingFormComponent,
        data:{
          title:'Admin | Facturas',
          urls:[
           {title: 'Dashboard', url: '/dashboard/admin'},
           { title:'Admin | Facturas'}
          ]
       }
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
