import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ AuthService, ProfileService ]
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoggedIn: boolean;
  userName: string;
  userId: string;

  ngOnInit(){}
  myFunction(){
    var x = document.getElementById("myTopnav");
      if (x.className === "navbar") {
          x.className += " responsive";
      } else {
          x.className = "navbar";
      }
  }

  constructor(private auth: AuthService, private route: Router){
    this.auth.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName
        this.userId = user.uid
      }
    });
  }

  clickedProfile(){
    this.route.navigate(['profile', this.userId]);
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
