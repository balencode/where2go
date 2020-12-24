import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-sauna-page',
  templateUrl: './sauna-page.component.html',
  styleUrls: ['./sauna-page.component.scss']
})
export class SaunaPageComponent implements OnInit {

  posts$: Observable<Post[]>
  searchStr = ''
  sort:boolean = false

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllSauna()
  }
  toggle(){
    this.sort = !this.sort
  }

}
