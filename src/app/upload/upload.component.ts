import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Item } from '../models/item'
import { ItemsService } from '../services/items.service';
declare var $:any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [ ItemsService ]
})
export class UploadComponent {
  items: FirebaseListObservable<Item[]>
  selectedFile: any;
  constructor(private itemService: ItemsService) { }
  clickFileBtn(){
    $('#filePressed').click()
  }
  readFile(event){
    this.selectedFile = event.target.files[0]
  }
  addNewItem(newTitle: string, newPrice: number, newDescription: string){
    let file = this.selectedFile;
    let newItems = new Item(newTitle, file, newPrice, newDescription)
    this.itemService.pushUpload(newItems)
  }

}
