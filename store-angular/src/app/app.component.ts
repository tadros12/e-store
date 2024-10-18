import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CategoryComponent } from "./pages/category/category.component";
import { ProductViewComponent } from "./pages/product-view/product-view.component";
import { LoginComponent } from "./auth/login/login.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { SignupComponent } from "./auth/signup/signup.component";
import { ToastComponent } from "./toast/toast/toast.component";

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
    HttpClientXsrfModule,
    SignupComponent,
    ToastComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-angular';

  @ViewChild(ToastComponent) toast!: ToastComponent;

  showToast(message: string, type: 'success' | 'error') {
    this.toast.message = message;
    this.toast.type = type;
    this.toast.show();
  }
}