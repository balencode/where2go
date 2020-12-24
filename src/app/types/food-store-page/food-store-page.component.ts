import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-food-store-page',
  templateUrl: './food-store-page.component.html',
  styleUrls: ['./food-store-page.component.scss']
})
export class FoodStorePageComponent implements OnInit {

  posts$: Observable<Post[]>
  searchStr = ''
  sort:boolean = false
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllFoodStore()
  }
  toggle(){
    this.sort = !this.sort
  }


}
