import { Injectable } from '@angular/core';
import { IUser } from './user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Jana',
      lastName: 'Simjanovska',
      userName: 'username',
      password: 'password',
    };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
}
