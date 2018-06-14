import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ItemsService } from '../services/items.service';
import { CommentsService } from '../services/comments.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Item } from '../models/item';
import { Location } from '@angular/common';
import { Comment } from '../models/comment';
import * as firebase from "firebase";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ ItemsService, CommentsService, AuthService ]
})
export class DetailsComponent implements OnInit {
  postId: string;
  currentUserId: string;
  isLoggedIn: boolean;
  userName: string;
  galleryPosts;
  commentPost;
  user;

  constructor(
    private routeTo: Router,
    private route: ActivatedRoute,
    private location: Location,
    private itemsService: ItemsService,
    private commentsService: CommentsService,
    private afAuth: AuthService,
  ){
    this.afAuth.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName
      }
    });
   }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.postId = urlParameters['id'];
     });
     this.itemsService.getPostById(this.postId).subscribe(dataLastEmittedFromObserver => {
     this.galleryPosts = dataLastEmittedFromObserver;
    });
    this.commentsService.getComnmentsId(this.postId).subscribe(dataLastEmittedFromObserver => {
    this.commentPost = dataLastEmittedFromObserver;
   });
  }
  addNewComment(newComment: string){
    let timestamp = new Date;
    this.commentsService.addComments(new Comment(newComment, timestamp.toString(), this.userName), this.postId)
  }
  deletePost(){
    this.routeTo.navigate([''])
    this.itemsService.deleteItem(this.postId)
  }
  deleteComment(currentComment){
    this.commentsService.userDeleteComment(currentComment.$key, this.postId)
  }

}
