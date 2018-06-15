import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ ProfileService ]
})
export class ProfileComponent implements OnInit {
  userUid;
  userPost;
  constructor(private routeTo: Router,
              private route: ActivatedRoute,
              private location: Location,
              private profileSerice: ProfileService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.userUid = urlParameters['id'];
    });
    this.profileSerice.getProfileByUid(this.userUid).subscribe(dataLastEmittedFromObserver => {
      this.userPost = dataLastEmittedFromObserver;
    });
  }
}
