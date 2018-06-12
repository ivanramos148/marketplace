import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app'
import { Router } from '@angular/router';
import 'firebase/storage';


@Injectable()
export class ItemsService {
  items: FirebaseListObservable<Item[]>;
  constructor(private route: Router, private database: AngularFireDatabase){
    this.items = database.list('items');
  }
  pushUpload(upload: Item) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`items/${upload.file.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.addItem(upload)
      }
    )
  }
  getItems(){
    return this.items
  }
  getPostById(postId: string){
    return this.database.object(`items/${postId}`);
  }
  addItem(newItem: Item){
    this.database.list(`items/`).push(newItem)
  }
}
