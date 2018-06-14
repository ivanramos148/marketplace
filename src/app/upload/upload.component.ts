import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Item } from '../models/item'
import { ItemsService } from '../services/items.service';
import { AuthService } from '../services/auth.service';

declare var $:any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [ ItemsService, AuthService ]
})
export class UploadComponent {
  items: FirebaseListObservable<Item[]>
  selectedFile: any;
  userName: string;
  userId: string;
  constructor(private itemService: ItemsService, private afAuth: AuthService) {
    {
      this.afAuth.user.subscribe(user => {
        if (user == null) {
        } else {
          this.userName = user.displayName
          this.userId = user.uid
        }
      });
     }
   }
  clickFileBtn(){
    $('#filePressed').click()
  }
  readFile(event){
    this.selectedFile = event.target.files[0]
  }
  addNewItem(newTitle: string, newPrice: number, newDescription: string){
    let file = this.selectedFile;
    let newItems = new Item(newTitle, file, newPrice, newDescription, this.userName , this.userId )
    this.itemService.pushUpload(newItems)
  }
  priorityColor(){
    if(this.selectedFile){
      return "color: yellow"
    }
  }
}
