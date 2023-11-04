import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './views/listado/listado.component';
import { EntradaComponent } from './views/listado/entrada/entrada.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: 'listado', component: ListadoComponent},
  {path: 'nosotros', component: AcercaDeNosotrosComponent},
  {path: 'login', component: LoginComponent},

  {path: '', redirectTo: 'listado', pathMatch: 'full'},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    EntradaComponent,
    AcercaDeNosotrosComponent,
    PaginaNoEncontradaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
