import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../view/navbar/navbar.component";
import { FooterComponent } from "../../view/footer/footer.component";
import { RouterLink } from '@angular/router';
import { ProductsList } from '../../products-lists.interface';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  url = 'http://localhost:3000/products';
  products: ProductsList[] = []; 

  constructor() {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(): Promise<void> {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      this.products = await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  generateStarRating(rating: number): string {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += i < rating ? '&#9733;' : '&#9734;';
    }
    return stars;
  }
}