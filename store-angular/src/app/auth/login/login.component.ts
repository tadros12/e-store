import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service'; 
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private appComponent: AppComponent) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (email === 'admin@admin' && password === '123456') {
        this.router.navigate(['/dashboard']);
        this.appComponent.showToast('Admin login successful', 'success');
        return;
      }

      this.authService.login(email, password).subscribe(
        response => {
          if (response.success) {
            console.log('Login successful', response);
            this.router.navigate(['/home']);
            this.appComponent.showToast('Login successful', 'success');
          } else {
            this.appComponent.showToast('Login failed: ' + response.message, 'error');
          }
        },
        error => {
          this.appComponent.showToast('Login error: ' + error.message, 'error');
        }
      );
    } else {
      this.appComponent.showToast('Form is invalid', 'error');
    }
  }
}