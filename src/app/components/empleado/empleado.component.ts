import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../classes/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Router } from '@angular/router';
import { Cargo } from '../../classes/cargo';
import { CargoService } from '../../services/cargo.service';

@Component({
  selector: 'app-empleado',
  imports: [CommonModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  empleados: Empleado[] = [];
  cargos: Cargo[] = [];

  constructor(private auth: AuthService, private empleadoService: EmpleadoService, private router: Router, private cargoService: CargoService) {}

  ngOnInit(): void {
    this.getEmpleados();
    this.getCargos();
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['updateEmpleado', id]);
  }

  eliminarEmpleado(id: number) {
    this.empleadoService.deleteEmpleado(id).subscribe(dato => {
      this.getEmpleados();
    })
  }

  private getEmpleados() {
    this.empleadoService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

  private getCargos() {
    this.cargoService.getCargos().subscribe(data => {
      this.cargos = data;
    });
  }

  getCargoNombre(cargo_id: number): string {
    const cargo = this.cargos.find((c) => c.id === cargo_id);
    return cargo ? cargo.nombre : 'Sin asignar';
  }

  logout(){
    this.auth.logout();
  }
}
