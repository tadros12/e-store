import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CommonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  recommendations = [
    { name: 'Product 1', price: '$19.99', image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', price: '$29.99', image: 'https://via.placeholder.com/150' },
    { name: 'Product 3', price: '$39.99', image: 'https://via.placeholder.com/150' },
  ];
}
