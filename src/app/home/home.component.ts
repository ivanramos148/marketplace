import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Item } from '../models/item'
import { Router } from '@angular/router';
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

  constructor(private itemservices: ItemsService, private route: Router ) { }
  ngOnInit() {
    this.items = this.itemservices.getItems()
  }
  goToDetails(clickedPost){
    this.route.navigate(['details', clickedPost.$key]);
  }
}
