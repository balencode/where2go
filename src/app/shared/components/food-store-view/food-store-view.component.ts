import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-food-store-view',
  templateUrl: './food-store-view.component.html',
  styleUrls: ['./food-store-view.component.scss']
})
export class FoodStoreViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
