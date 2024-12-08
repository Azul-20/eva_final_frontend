import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Cargo } from '../../classes/cargo';
import { CargoService } from '../../services/cargo.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargo',
  imports: [CommonModule],
  templateUrl: './cargo.component.html',
  styleUrl: './cargo.component.css'
})
export class CargoComponent {

  cargos : Cargo[] = [];

  constructor(private auth: AuthService, private cargoService: CargoService, private router: Router) {}

  ngOnInit(): void {
    this.getCargos();
  }

  private getCargos() {
    this.cargoService.getCargos().subscribe(data => {
      this.cargos = data;
    })
  }

  actualizarCargo(id: number) {
    this.router.navigate(['updateCargo', id]);
  }

  eliminarCargo(id: number) {
    this.cargoService.deleteCargo(id).subscribe(data => {
      this.getCargos();
    })
  }

  logout(){
    this.auth.logout();
  }
}
