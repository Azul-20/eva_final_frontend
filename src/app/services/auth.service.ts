import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:4000/auth';

  constructor(private http: HttpClient, private router: Router) { }

  register(userData: any) {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  logout(): void {
    // Eliminar el token del localStorage
    localStorage.removeItem('token');
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/']);
  }
}

