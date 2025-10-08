import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../interfaces/product-interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() item!: ProductInterface;
}
