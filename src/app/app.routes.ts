import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { AuthGuard } from './auth.guard'; 
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component'; 
import { LoginComponent } from './components/login/login.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { UpdateEmpleadoComponent } from './components/empleado/updateEmpleado.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'empleados', component: EmpleadoComponent, canActivate: [AuthGuard] },
    { path: 'cargos', component: CargoComponent, canActivate: [AuthGuard] },
    { path: 'updateEmpleado/:id', component: UpdateEmpleadoComponent, canActivate: [AuthGuard] },
];
