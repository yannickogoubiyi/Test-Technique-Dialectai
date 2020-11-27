import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products !: Product[];
  checkoutForm;
  
  constructor(private productService: ProductService, private formBuilder: FormBuilder,) {
    this.checkoutForm = this.formBuilder.group({
      productName: '',
      description: '',
      starRating: '',
      price: '', 
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  onSubmit(product: Product): void {
    if (!product.productName) { 
      return;
    }

    this.productService.createProduct(product)
      .subscribe(product => {
        this.products.push(product);
      });

    this.checkoutForm.reset();
  }

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    console.log(this.products[10]);

    this.productService.deleteProduct(product).subscribe();
  }

}
