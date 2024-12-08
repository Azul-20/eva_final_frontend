import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.auth.login(this.loginData).subscribe(
      (response:any) => {
        //Almacenar el token JWT en el local storage o en una cookie
        localStorage.setItem('token',response.token);

        //Redirigir a la página de inicio o a otra página deseada
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
