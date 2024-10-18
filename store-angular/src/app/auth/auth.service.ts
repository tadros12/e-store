import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Check if the email already exists
    return this.http.get<any[]>(`${this.apiUrl}/users?email=${email}`, { headers }).pipe(
      switchMap(users => {
        if (users.length > 0) {
          return throwError(() => new Error('Email already exists'));
        } else {
          // Proceed with registration
          return this.http.post<any>(`${this.apiUrl}/users`, { username, email, password }, { headers });
        }
      }),
      catchError(error => {
        return throwError(() => new Error(error.message));
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any[]>(`${this.apiUrl}/users?email=${email}`, { headers }).pipe(
      map(users => {
        if (users.length === 0) {
          throw new Error('User not found');
        }
        const user = users[0];
        if (user.password !== password) {
          throw new Error('Invalid password');
        }
        return { success: true, message: 'Login successful', userId: user.id };
      }),
      catchError(error => {
        return throwError(() => new Error(error.message));
      })
    );
  }
}