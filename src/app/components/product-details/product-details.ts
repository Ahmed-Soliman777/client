import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from '../../Services/product-services';
import { ProductInterface } from '../../interfaces/product-interface';
import { CurrencyPipe } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, ProductCard],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  product!: ProductInterface;
  mainImage!: string;
  similarProducts: ProductInterface[] = [];
  constructor(private route: ActivatedRoute, private productServices: ProductServices) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.productServices.getProductsById(id).subscribe({
      next: (result) => {
        this.product = result;

        if (this.product.images && this.product.images.length > 0) {
          this.mainImage = this.product.images[0];
        }
        this.loadSimilarProducts(this.product.categoryId);
      },
      error: (err) => console.error('Error loading product:', err),
    });
  }

  loadSimilarProducts(categoryId: string) {
    this.productServices.getProductList('', categoryId, '', 1, 4, '', -1).subscribe({
      next: (result) => (this.similarProducts = result),
      error: (err) => console.error('Error loading similar products:', err),
    });
  }

  changeImage(item: string) {
    this.mainImage = item;
  }
  get discountPrice() {
    return this.product.sellingPrice - (this.product.sellingPrice * this.product.discount) / 100;
  }
}
