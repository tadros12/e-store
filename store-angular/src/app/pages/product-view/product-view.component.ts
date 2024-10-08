import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent as NavbarComponent } from "../../view/navbar/navbar.component";
import { FooterComponent as FooterComponent } from "../../view/footer/footer.component";
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  product: any = [];
  ngOnInit(): void {
    this.getProduct(this.productId);
  }

constructor(public productservice:ProductsService) { }

  productId= 0;
  @Input() set id(value: number) {
    this.productId = value;
    console.log('Product ID:', this.productId);
  }
  getProduct(id: number) {
    this.productservice.getProduct(this.productId).subscribe(
      response => {
        this.product = response;
        
    },
    error => {
      console.error("error");}
    );
  }




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

