import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ AuthService ]
})
export class AppComponent {
  title = 'app';
  isLoggedIn: boolean;
  userName: string;
  constructor(private auth: AuthService){
    this.auth.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName
      }
    });
  }
  logIn() {
    this.auth.login();
  }
  logOut(){
    if(confirm("are you sure you want to log out?")){
      this.auth.logout()
    }
  }
}
