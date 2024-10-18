import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service'; // Adjusted import path

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductsService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      rating: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required]
    });
  }
  

  onSubmit() {
    if (this.productForm.valid) {
      
      this.productService.addProduct(this.productForm.value).subscribe(
        response => {
          console.log('Product added successfully', response);
        },
        error => {
          console.error('Error adding product', error);
        }
      );
    }
  }
}