import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ItemsService } from '../services/items.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Item } from '../models/item';
import { Location } from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ ItemsService ]
})
export class DetailsComponent implements OnInit {
  constructor(private routeTo: Router,private route: ActivatedRoute, private location: Location, private itemsService: ItemsService) { }
  postId: string;
  galleryPosts;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.postId = urlParameters['id'];
     });
     this.itemsService.getPostById(this.postId).subscribe(dataLastEmittedFromObserver => {
     this.galleryPosts = dataLastEmittedFromObserver;
    });
  }
}
