import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app'

@Injectable()
export class CommentsService {
  comments: FirebaseListObservable<Comment[]>
  constructor(private database: AngularFireDatabase) { }
  getComnmentsId(postId){
    return this.database.list(`comments/${postId}`)
  }
  addComments(newComment, postId){
    this.database.list(`comments/${postId}`).push(newComment)
  }
  userDeleteComment(currentComment: any, postId){
    this.database.list(`comments/${postId}`).remove(currentComment)
  }
}
