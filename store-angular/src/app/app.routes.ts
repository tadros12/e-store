import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { CategoryComponent } from './pages/category/category.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
export const routes: Routes = [
  {
    path: 'home',
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
  {
    path: '',
    component:LoginComponent,
  },
  {
    path: 'signup',
    component:SignupComponent,
  },
  {
    path: 'add-product',
    component:AddProductComponent,
  },
  {
    path: 'dashboard',
    component:DashboardComponent,
  }
  ,
  {
    path: 'update-product/:id',
    component:UpdateProductComponent
  }
];
