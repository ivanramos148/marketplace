import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ AuthService ]
})
export class UsersComponent implements OnInit {
  userName;

  constructor(public afAuth: AuthService) {
    this.afAuth.user.subscribe(user =>  {
      this.userName = user.displayName;

    });
  }
  ngOnInit() {}
  logIn() {
    this.afAuth.login();
  }

  logOut() {
    this.afAuth.logout();
  }

}
