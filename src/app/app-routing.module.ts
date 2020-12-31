import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {ListProductComponent} from './product/list-product/list-product.component';
import {UpdateProductComponent} from './product/update-product/update-product.component';
import {DeleteProductComponent} from './product/delete-product/delete-product.component';

const routes: Routes = [
  {
    path: 'create-product',
    component: CreateProductComponent
  },
  {
    path: 'list-product',
    component: ListProductComponent
  }, {
  path: 'update-product/:id',
    component: UpdateProductComponent
  },{
  path: 'delete-product/:id',
    component: DeleteProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
