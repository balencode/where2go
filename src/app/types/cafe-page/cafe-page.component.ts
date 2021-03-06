import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-cafe-page',
  templateUrl: './cafe-page.component.html',
  styleUrls: ['./cafe-page.component.scss']
})
export class CafePageComponent implements OnInit {

  posts$: Observable<Post[]>
  searchStr = ''
  sort:boolean = false

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllCafe()
  }
  toggle(){
    this.sort = !this.sort
  }

}
