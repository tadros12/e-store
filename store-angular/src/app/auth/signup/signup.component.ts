import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service'; // Adjust the path as necessary

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { username, email, password } = this.signupForm.value;
      this.authService.signup(username, email, password).subscribe(
        response => {
          if (response.success) {
            console.log('Signup successful', response);
            this.router.navigate(['/home']);
          } else {
            console.error('Signup failed', response.message);
          }
        },
        error => {
          console.error('Signup error', error);
        }
      );
    } else {
      console.warn('Form is invalid');
    }
  }
}