import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-park-page',
  templateUrl: './park-page.component.html',
  styleUrls: ['./park-page.component.scss']
})
export class ParkPageComponent implements OnInit {

  posts$: Observable<Post[]>
  searchStr = ''
  sort:boolean = false

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllPark()
  }
  toggle(){
    this.sort = !this.sort
  }

}
