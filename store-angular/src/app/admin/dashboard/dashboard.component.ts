import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../view/navbar/navbar.component";
import { FooterComponent } from "../../view/footer/footer.component";
import { AdminHeaderComponent } from "../admin-header/admin-header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent, AdminHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: any[] = [];
  deleteProductId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any[]>('http://localhost:3000/products').subscribe(data => {
      this.products = data;
    });
  }

  openDeleteModal(id: number): void {
    this.deleteProductId = id;
    const modal = document.getElementById('deleteModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeDeleteModal(): void {
    const modal = document.getElementById('deleteModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  confirmDelete(): void {
    if (this.deleteProductId !== null) {
      this.http.delete(`http://localhost:3000/products/${this.deleteProductId}`).subscribe(() => {
        this.products = this.products.filter(product => product.id !== this.deleteProductId);
        this.closeDeleteModal();
      });
    }
  }

  editProduct(id: number): void {
    // Implement edit product logic here
  }
}