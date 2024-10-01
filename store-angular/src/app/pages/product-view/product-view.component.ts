import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent as NavbarComponent } from "../../view/navbar/navbar.component";
import { FooterComponent as FooterComponent } from "../../view/footer/footer.component";
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  productId= -1;
  @Input() set id(value: number) {

    this.productId = value;
    console.log('Product ID:', this.productId);
  }
  products = [
    { id: 1, name: "Product 1", price: "$19.99", description: "Brief description of Product 1.", rating: 1, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$29.99", description: "Brief description of Product 2.", rating: 3, image: "../Assets//img//download.jpg" },
    { id: 3, name: "Product 3", price: "$39.99", description: "Brief description of Product 3.", rating: 3, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$49.99", description: "Brief description of Product 4.", rating: 4, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: "$59.99", description: "Brief description of Product 5.", rating: 5, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: "$69.99", description: "Brief description of Product 6.", rating: 2, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Product 7", price: "$79.99", description: "Brief description of Product 7.", rating: 4, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Product 8", price: "$89.99", description: "Brief description of Product 8.", rating: 3, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Product 9", price: "$99.99", description: "Brief description of Product 9.", rating: 5, image: "https://via.placeholder.com/150" },
    { id: 10, name: "Product 10", price: "$109.99", description: "Brief description of Product 10.", rating: 4, image: "https://via.placeholder.com/150" },
  ];

  $index: any|string;
generateStarRating(rating: number): string {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += i < rating ? '&#9733;' : '&#9734;';
  }
  return stars;
}
  recommendations = [
    { name: 'Product 1', price: '$19.99', image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', price: '$29.99', image: 'https://via.placeholder.com/150' },
    { name: 'Product 3', price: '$39.99', image: 'https://via.placeholder.com/150' },
  ];
}
