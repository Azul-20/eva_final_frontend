import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CargoService } from '../../services/cargo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {
  registerData = {
    email: '',
    password: '',
    nombre: '',
    apellidos: '',
    cargo_id: ''
  };

  cargos: any[] = [];

  constructor(private auth: AuthService, private cargo: CargoService, private router: Router) { }
  
  ngOnInit() {
    this.loadCargos();
  }

  loadCargos() {
    this.cargo.getCargos().subscribe((data: any[]) => {
      this.cargos = data;
    });
  }
  
  register() {
    this.auth.register(this.registerData).subscribe(
      success => console.log('Registration Success'),
      err => console.error(err)
    );
    this.router.navigate(['/login']);
  }

}
  
