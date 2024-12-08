import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../classes/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { CargoService } from '../../services/cargo.service';
import { Cargo } from '../../classes/cargo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-empleado',
  imports: [CommonModule, FormsModule],
  templateUrl: './updateEmpleado.component.html',
})
export class UpdateEmpleadoComponent {

    id: number = 0;
    empleado: Empleado = new Empleado();
    cargos: Cargo[] = [];

    constructor(private empleadoService: EmpleadoService, private router: Router, private route: ActivatedRoute, private auth: AuthService, private cargoService: CargoService) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.loadCargos();
  
      this.empleadoService.getByIdEmpleado(this.id).pipe(
        tap(dato => { //realiza algun efecto secundario
          this.empleado = dato;
        }),
        catchError(error => {
          console.error(error);
          return of(null); // Retorna un observable vacío en caso de error
        })
      ).subscribe();
    }

    loadCargos() {
        this.cargoService.getCargos().subscribe((data: any[]) => {
          this.cargos = data;
        });
      }
  
    irAlaListaDeEmpleados() {
      this.router.navigate(['/empleados']);
    }
  
    onSubmit(): void {
      if (this.empleado) {
        console.log('Datos a enviar:', this.empleado);
        const empleadoCopy = { ...this.empleado };
        this.empleadoService.updateEmpleado(this.id, empleadoCopy).pipe(
          tap(dato => {
            this.irAlaListaDeEmpleados(); // Redirige en caso de éxito
          }),
          catchError(error => {
            console.error('Error al actualizar el empleado:', error);
            return of(null); // Retorna un observable vacío en caso de error
          })
        ).subscribe(); // Realiza la suscripción
      }
    }

  logout(){
    this.auth.logout();
  }
}