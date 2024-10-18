import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service'; 
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private appComponent: AppComponent) {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { username, email, password } = this.signupForm.value;
      this.authService.register(username, email, password).subscribe(
        response => {
          console.log('User registered successfully', response);
          this.router.navigate(['']);
          this.appComponent.showToast('User registered successfully', 'success');
        },
        error => {
          this.appComponent.showToast('Error registering user: ' + error.message, 'error');
        }
      );
    } else {
      this.appComponent.showToast('Form is invalid', 'error');
    }
  }
}