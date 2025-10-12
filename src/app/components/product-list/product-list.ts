import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../../Services/product-services';
import { ProductInterface } from '../../interfaces/product-interface';
import { ProductCard } from '../product-card/product-card';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { CategoryInterface } from '../../interfaces/category-interface';
import { Category } from '../../Services/category';
import { BrandServices } from '../../Services/brand-services';
import { BrandInterface } from '../../interfaces/brand-interface';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, MatSelectModule, FormsModule, MatButtonModule, NgClass],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  searchTerm: string = '';
  categoryId: string = '';
  sortBy: string = '';
  sortOrder: number = -1;
  brandId: string = '';
  pageSize: number = 6;
  page: number = 1;
  products: ProductInterface[] = [];
  categories: CategoryInterface[] = [];
  brands: BrandInterface[] = [];
  constructor(
    private productServices: ProductServices,
    private route: ActivatedRoute,
    private router: Router,
    private categorieService: Category,
    private brandService: BrandServices
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.categoryId = params['categoryId'] || '';
      this.searchTerm = params['searchTerm'] || '';
      this.loadProducts();
    });

    this.categorieService.getCategory().subscribe((result) => {
      this.categories = result;
    });
    this.brandService.getBrands().subscribe((result) => {
      this.brands = result;
    });
  }

  loadProducts() {
    this.productServices
      .getProductList(
        this.searchTerm,
        this.categoryId,
        this.brandId,
        this.page,
        this.pageSize,
        this.sortBy,
        this.sortOrder
      )
      .subscribe((result) => {
        this.products = result;
      });
  }
  getProducts() {
    setTimeout(() => {
      this.productServices
        .getProductList(
          this.searchTerm,
          this.categoryId,
          this.brandId,
          this.page,
          this.pageSize,
          this.sortBy,
          this.sortOrder
        )
        .subscribe((result) => {
          this.products = result;
        });
    }, 100);
  }
  orderChange(event: any) {
    this.sortBy = 'sellingPrice';
    this.sortOrder = event;
    this.getProducts();
  }

  pageChange(page: number) {
    this.page = page;
  }
}
