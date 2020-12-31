import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service-product/product.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
product: Product ={};
id: number =0;
  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }
getProduct(id: number){
    this.productService.getProductById(id).subscribe(value => {
      this.product = value;
    });
}
deleteProduct(id: number){
    this.productService.deleteProductById(id).subscribe(()=>{
        alert('Xoá thành công');
        this.router.navigate(['/list-product']);
      },
      error => console.log(error));
}
}
