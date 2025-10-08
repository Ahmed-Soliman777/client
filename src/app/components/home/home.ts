import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../../Services/product-services';
import { ProductInterface } from '../../interfaces/product-interface';
import { CurrencyPipe } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  newProducts: ProductInterface[] = [];
  featuredProducts: ProductInterface[] = [];
  constructor(private productServices: ProductServices) {}
  ngOnInit(): void {
    this.productServices.getNewProducts().subscribe((result) => {
      this.newProducts = result;
    });
    this.productServices.getFeaturedProducts().subscribe((result) => {
      this.featuredProducts = result;
    });
  }
}
