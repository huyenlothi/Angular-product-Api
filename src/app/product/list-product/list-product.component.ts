import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service-product/product.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(){
    this.productService.getAllProduct().subscribe(result => {
      this.products = result;
    }, error => console.log(error));
  }
}
