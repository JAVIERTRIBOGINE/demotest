import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn() {
    return (
      !!sessionStorage.getItem('isLogged') &&
      sessionStorage.getItem('isLogged') === 'true'
    );
  }
}
