import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Item } from '../models/item'
import { Router } from '@angular/router';
import { ItemsService } from '../services/items.service';
import { Subject } from 'rxjs/Subject'
declare var $:any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ ItemsService ]
})
export class SearchComponent implements OnInit {
  items;
  startAt = new Subject()
  endAt = new Subject()

  constructor(public route: Router, public itemservices: ItemsService) { }

  ngOnInit() {
    this.itemservices.searchItems(this.startAt, this.endAt)
                  .subscribe(items => this.items = items)
  }
  search($event){
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
  }
  goToDetails(item){
      this.route.navigate(['details', item.$key]);
  }
}
