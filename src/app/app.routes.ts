import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Categoris } from './components/manage/categoris/categoris';
import { CategoryForm } from './components/category-form/category-form';
import { Brands } from './components/brands/brands';
import { BrandsForms } from './components/brands-forms/brands-forms';
import { Products } from './components/products/products';
import { ProductForm } from './components/product-form/product-form';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { authGuard } from './core/auth-guard';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
  { path: '', component: Home, title: 'Ecommerce' },
  {
    path: 'admin',
    component: AdminDashboard,
    title: 'Ecommerce dashboard',
    canActivate: [authGuard],
  },
  {
    path: 'admin/categories',
    component: Categoris,
    title: 'Ecommerce Categories',
    canActivate: [authGuard],
  },
  {
    path: 'admin/categories/add',
    component: CategoryForm,
    title: 'Ecommerce Categories',
    canActivate: [authGuard],
  },
  {
    path: 'admin/categories/:id',
    component: CategoryForm,
    title: 'Ecommerce Categories',
    canActivate: [authGuard],
  },
  {
    path: 'admin/categories/:id',
    component: CategoryForm,
    title: 'Ecommerce Categories',
    canActivate: [authGuard],
  },
  { path: 'admin/brands', component: Brands, title: 'Ecommerce Brands', canActivate: [authGuard] },
  {
    path: 'admin/brands/add',
    component: BrandsForms,
    title: 'Ecommerce Brands',
    canActivate: [authGuard],
  },
  {
    path: 'admin/brands/:id',
    component: BrandsForms,
    title: 'Ecommerce Brands',
    canActivate: [authGuard],
  },
  {
    path: 'admin/brands/:id',
    component: BrandsForms,
    title: 'Ecommerce Brands',
    canActivate: [authGuard],
  },
  {
    path: 'admin/products',
    component: Products,
    title: 'Ecommerce Products',
    canActivate: [authGuard],
  },
  {
    path: 'admin/products/add',
    component: ProductForm,
    title: 'Ecommerce Products',
    canActivate: [authGuard],
  },
  {
    path: 'admin/products/:id',
    component: ProductForm,
    title: 'Ecommerce Products',
    canActivate: [authGuard],
  },
  {
    path: 'admin/products/:id',
    component: ProductForm,
    title: 'Ecommerce Products',
    canActivate: [authGuard],
  },
  { path: 'products', component: ProductList, title: 'Ecommerce Products' },
  { path: 'product/:id', component: ProductDetails, title: 'Ecommerce Products Details' },
  { path: 'register', component: Register, title: 'Register' },
  { path: 'login', component: Login, title: 'Login' },
  { path: 'profile', component: Profile, title: 'Profile' },
];
