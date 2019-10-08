import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocalesComponent } from './components/locales/locales.component';
import { LocalComponent } from './components/local/local.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BuscadorComponent,
    FavoritosComponent,
    TiendasComponent,
    TiendaComponent,
    NavbarComponent,
    LocalesComponent,
    LocalComponent,
    CiudadesComponent,
    CiudadComponent,
    ProductosComponent,
    ProductoComponent,
    PerfilComponent
  ],
  entryComponents:[BuscadorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
