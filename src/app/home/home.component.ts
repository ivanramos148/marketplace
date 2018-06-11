import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[] = []
  constructor() { }
  ngOnInit() {}
  addItem(newTitle: string, newDescription: string){
    let newItems = new Item(newTitle, 'pic.png', newDescription)
    this.items.push(newItems)
  }
}
