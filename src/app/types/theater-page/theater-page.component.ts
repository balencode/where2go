import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-theater-page',
  templateUrl: './theater-page.component.html',
  styleUrls: ['./theater-page.component.scss']
})
export class TheaterPageComponent implements OnInit {

  posts$: Observable<Post[]>
  searchStr = ''
  sort:boolean = false

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllTheatre()
  }
  toggle(){
    this.sort = !this.sort
  }


}
