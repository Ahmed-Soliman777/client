import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  FormArray,
  FormGroup,
} from '@angular/forms';
import { ProductServices } from '../../Services/product-services';
import { ActivatedRoute, Router } from '@angular/router';
import { MatLabel } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrandInterface } from '../../interfaces/brand-interface';
import { CategoryInterface } from '../../interfaces/category-interface';
import { Category } from '../../Services/category';
import { BrandServices } from '../../Services/brand-services';
import { ProductInterface } from '../../interfaces/product-interface';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatLabel,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private productServices: ProductServices,
    private catergoryServices: Category,
    private brandsServices: BrandServices,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  productForm!: FormGroup;
  name!: string;
  id!: string;
  brands: BrandInterface[] = [];
  Categories: CategoryInterface[] = [];
  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      description: [null, [Validators.required, Validators.minLength(20)]],
      shortDescription: [null, [Validators.required, Validators.minLength(10)]],
      purshasePrice: [null, [Validators.required]],
      sellingPrice: [null, [Validators.required]],
      discount: [],
      images: this.formBuilder.array([]),
      categoryId: [null, [Validators.required]],
      brandId: [null, [Validators.required]],
      isFeature: [false],
      isNew: [false],
    });
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    if (this.id) {
      this.productServices.getProductsById(this.id).subscribe((result: ProductInterface) => {
        this.productForm.patchValue(result);
        for (let index = 0; index < result.images.length; index++) {
          this.addImage();
        }
      });
    } else {
      this.addImage();
    }
    this.catergoryServices.getCategory().subscribe((results) => {
      this.Categories = results;
    });
    this.brandsServices.getBrands().subscribe((results) => {
      this.brands = results;
    });
  }

  addImage() {
    this.images.push(this.formBuilder.control(null));
  }

  removeImage() {
    this.images.removeAt(this.images.controls.length - 1);
  }

  get images(): FormArray {
    return this.productForm.get('images') as FormArray;
  }

  addProduct() {
    let value = this.productForm.value;
    this.productServices.addProduct(value).subscribe((result) => {
      alert('Prodcut added!');
      this.router.navigateByUrl('/admin/products');
    });
  }

  updateProduct() {
    let value = this.productForm.value;
    this.productServices.updateProduct(this.id, value).subscribe((result: any) => {
      alert('Product updated!');
      this.router.navigateByUrl('/admin/products');
    });
  }
}
