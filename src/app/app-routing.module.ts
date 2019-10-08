import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, //Llamo todas las ciudades que están registradas
  { path: 'perfil', component: PerfilComponent },
  { path: 'search', component: BuscadorComponent },
  { path: 'favorites', component: FavoritosComponent },
  { path: 'ciudades/:ciudad', component: CiudadComponent }, //Llamo todas las tiendas de esa ciudad
  { path: 'tiendas/:tienda', component: TiendaComponent }, //Llamo todos los productos de esa tienda
  { path: 'productos/:id', component: ProductoComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
