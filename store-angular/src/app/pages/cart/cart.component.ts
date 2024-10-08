import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from "../../view/navbar/navbar.component";
import { FooterComponent } from "../../view/footer/footer.component";
import { Module } from 'module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems = [
    { name: 'Product 1', amount: 1, price: '$19.99', image: 'https://via.placeholder.com/60' },
    { name: 'Product 2', amount: 2, price: '$29.99', image: 'https://via.placeholder.com/60' },
    { name: 'Product 3', amount: 1, price: '$39.99', image: 'https://via.placeholder.com/60' },
  ];

  openUpdateModal(item: any): void {
    // Placeholder for opening update modal
  }

  openDeleteModal(item: any): void {
    // Placeholder for opening delete modal
  }
}