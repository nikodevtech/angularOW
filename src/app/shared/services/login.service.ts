import { Usuario } from './../clases/usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public Login(usuario: Usuario): Observable<number> {

    return of(Math.random()* (1000-0));
    
  }
}
