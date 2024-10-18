import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../view/navbar/navbar.component";
import { FooterComponent } from "../../view/footer/footer.component";
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: any = [];
  imageUrl = 'assets/images/'; // Base URL for images

  constructor(public productservice: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productservice.getProducts().subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.error(error);
      }
    );
  }

  generateStarRating(rating: number): string {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += i < rating ? '&#9733;' : '&#9734;';
    }
    return stars;
  }

  getImagePath(image: string): string {
    return this.imageUrl + image.split('fakepath\\').pop();
  }
}