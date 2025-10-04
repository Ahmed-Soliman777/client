import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Categoris } from './components/manage/categoris/categoris';

export const routes: Routes = [
    {path:'',component:Home, title:'Ecommerce' },
    {path:'admin/categories',component:Categoris, title:'Ecommerce Categories' },
    {path:'admin/categories/add',component:Categoris, title:'Ecommerce Categories' },
    {path:'admin/categories/:id',component:Categoris, title:'Ecommerce Categories' },
];
