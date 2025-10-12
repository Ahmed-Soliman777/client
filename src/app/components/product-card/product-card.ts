import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../interfaces/product-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() item!: ProductInterface;
  get discountPrice() {
    return this.item.sellingPrice - (this.item.sellingPrice * this.item.discount) / 100;
  }
}
