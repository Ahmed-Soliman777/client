import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Categoris } from './components/manage/categoris/categoris';
import { CategoryForm } from './components/category-form/category-form';
import { Brands } from './components/brands/brands';
import { BrandsForms } from './components/brands-forms/brands-forms';

export const routes: Routes = [
  { path: '', component: Home, title: 'Ecommerce' },
  { path: 'admin/categories', component: Categoris, title: 'Ecommerce Categories' },
  { path: 'admin/categories/add', component: CategoryForm, title: 'Ecommerce Categories' },
  { path: 'admin/categories/:id', component: CategoryForm, title: 'Ecommerce Categories' },
  { path: 'admin/categories/:id', component: CategoryForm, title: 'Ecommerce Categories' },
  { path: 'admin/brands', component: Brands, title: 'Ecommerce Bands' },
  { path: 'admin/brands/add', component: BrandsForms, title: 'Ecommerce Bands' },
  { path: 'admin/brands/:id', component: BrandsForms, title: 'Ecommerce Bands' },
  { path: 'admin/brands/:id', component: BrandsForms, title: 'Ecommerce Bands' },
];
