import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Item } from '../models/item'
import { ItemsService } from '../services/items.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ ItemsService ]
})
export class HomeComponent implements OnInit {
  items: FirebaseListObservable<Item[]>
  selectedFile: any;

  constructor(private itemservices: ItemsService) { }
  readFile(event){
    this.selectedFile = event.target.files[0]
  }
  ngOnInit() {
    this.items = this.itemservices.getItems()
  }
  addNewItem(newTitle: string, newPrice: number, newDescription: string){
    let file = this.selectedFile;
    let newItems = new Item(newTitle, file, newPrice, newDescription)
    this.itemservices.pushUpload(newItems)
  }
}
