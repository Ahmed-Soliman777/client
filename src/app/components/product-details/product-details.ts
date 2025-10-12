import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from '../../Services/product-services';
import { ProductInterface } from '../../interfaces/product-interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  product!: ProductInterface;
  mainImage!: string;
  constructor(private route: ActivatedRoute, private productServices: ProductServices) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.productServices.getProductsById(id).subscribe((result) => {
      this.product = result;
      this.mainImage = this.product.images[0];
    });
  }
  changeImage(item: string) {
    this.mainImage = item;
  }
  get discountPrice() {
    return this.product.sellingPrice - (this.product.sellingPrice * this.product.discount) / 100;
  }
}
