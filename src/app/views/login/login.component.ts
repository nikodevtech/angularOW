import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/clases/usuario';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public usuario: Usuario;
  constructor(private loginService: LoginService, private router: Router) {
    this.usuario = new Usuario();
  }
  ngOnInit(): void {}

  public submit(): void {
    this.loginService.Login(this.usuario).subscribe((data: number) => {

      localStorage.setItem('nombreUsuario', this.usuario.nombre);
      localStorage.setItem('tokenUsuario', data.toString());
      this.router.navigate(['/listado']);
    }, 
    (error: Error) => {
      console.log("Error al realizar acceso", error);
    });
  }
}
