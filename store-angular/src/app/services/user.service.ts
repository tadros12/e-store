import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/users';

  constructor(private http:HttpClient) { }
  get users():Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  getUser(id: number):Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.url, user);
  }
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, user);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
 
}
