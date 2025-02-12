import { Routes } from '@angular/router';
//import { HomeComponent } from './pages/home/home.component';
//import { DatosComponent } from './pages/datos/datos.component';
import { TableComponent } from './shared/table/table.component';
import { TarjetaComponent } from './shared/tarjeta/tarjeta.component';
import { TablaDetallesComponent } from './shared/tabla-detalles/tabla-detalles.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: TarjetaComponent },
    { path: 'datos', component: TableComponent },
    { path: 'detalles/:id', component: TablaDetallesComponent},
    { path: '**', redirectTo: 'home' },
  ];