import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../classes/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private apiUrl = 'http://localhost:4000/cargos';

  constructor(private http: HttpClient) { }

  getCargos(): Observable<Cargo[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  postCargo(cargo: Cargo): Observable<Object> {
    return this.http.post(`${this.apiUrl}`, cargo);
  }

  updateCargo(id: number, cargo: Cargo): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, cargo);
  }

  getByIdCargo(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(`${this.apiUrl}/${id}`);
  }

  deleteCargo(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
