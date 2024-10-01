import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CategoryComponent } from "./pages/category/category.component";
import { ProductViewComponent } from "./pages/product-view/product-view.component";
import { LoginComponent } from "./auth/login/login.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    CategoryComponent,
    ProductViewComponent,
    LoginComponent,
    CommonModule,
    HttpClientModule, 
    HttpClientXsrfModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'store-angular';
}