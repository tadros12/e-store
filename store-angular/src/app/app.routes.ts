import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { CategoryComponent } from './pages/category/category.component';
import { CartComponent } from './pages/cart/cart.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product-view/:id',
    component: ProductViewComponent,
  },
  {
    path: 'category/:cid',
    component: CategoryComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
