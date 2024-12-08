import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../classes/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:4000/empleados';

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  postEmpleado(empleado: Empleado): Observable<Object> {
    return this.http.post(`${this.apiUrl}`, empleado);
  }

  updateEmpleado(id: number, empleado: Empleado): Observable<Object> {
    console.log('Datos enviados al backend:', empleado);
    return this.http.put(`${this.apiUrl}/${id}`, empleado);
  }

  getByIdEmpleado(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`);
  }

  deleteEmpleado(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
