import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app'

@Injectable()
export class ProfileService {
  profile: FirebaseListObservable<any[]>
  constructor(private db: AngularFireDatabase) { }
  
  getProfileByUid(clickedId){
    return this.db.list(`profile/${clickedId}`)
  }
}
