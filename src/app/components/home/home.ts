import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../../Services/product-services';
import { ProductInterface } from '../../interfaces/product-interface';
import { CurrencyPipe } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe, ProductCard, CarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  newProducts: ProductInterface[] = [];
  featuredProducts: ProductInterface[] = [];
  bannerImages: ProductInterface[] = [];
  constructor(private productServices: ProductServices) {}
    ngOnInit(): void {
      this.productServices.getNewProducts().subscribe((result) => {
        this.newProducts = result;
        this.bannerImages.push(...result)
      });
    this.productServices.getFeaturedProducts().subscribe((result) => {
      this.featuredProducts = result;
        this.bannerImages.push(...result)
    });
  }
}
