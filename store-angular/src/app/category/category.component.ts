import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
   products = [
    { name: "Product 1", price: "$19.99", description: "Brief description of Product 1.", rating: 1, image: "https://via.placeholder.com/150" },
    { name: "Product 2", price: "$29.99", description: "Brief description of Product 2.", rating: 3, image: "Assets\\img\\download.jpg" },
    { name: "Product 3", price: "$39.99", description: "Brief description of Product 3.", rating: 3, image: "https://via.placeholder.com/150" },
    { name: "Product 4", price: "$49.99", description: "Brief description of Product 4.", rating: 4, image: "https://via.placeholder.com/150" },
    { name: "Product 5", price: "$59.99", description: "Brief description of Product 5.", rating: 5, image: "https://via.placeholder.com/150" },
    { name: "Product 6", price: "$69.99", description: "Brief description of Product 6.", rating: 2, image: "https://via.placeholder.com/150" },
    { name: "Product 7", price: "$79.99", description: "Brief description of Product 7.", rating: 4, image: "https://via.placeholder.com/150" },
    { name: "Product 8", price: "$89.99", description: "Brief description of Product 8.", rating: 3, image: "https://via.placeholder.com/150" },
    { name: "Product 9", price: "$99.99", description: "Brief description of Product 9.", rating: 5, image: "https://via.placeholder.com/150" },
    { name: "Product 10", price: "$109.99", description: "Brief description of Product 10.", rating: 4, image: "https://via.placeholder.com/150" },
];
generateStarRating(rating: number): string {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += i < rating ? '&#9733;' : '&#9734;';
  }
  return stars;
}
  
}
