import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service-product/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
product: Product = {};
  id: number =0;
  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(async  paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    })
  }

  ngOnInit(): void {
  }
  getProduct(id: number){
    return this.productService.getProductById(id).subscribe(value => {
      this.product = value;
    });
  }
updateProduct(id: number){
    this.productService.updateProduct(id, this.product).subscribe(() => {
      console.log('Thành công');
    }, () => {
      console.log('Xảy ra lỗi');
    })

}
}
