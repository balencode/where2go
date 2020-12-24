import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-pub-page',
  templateUrl: './pub-page.component.html',
  styleUrls: ['./pub-page.component.scss']
})
export class PubPageComponent implements OnInit {

  posts$: Observable<Post[]>
  searchStr = ''
  sort:boolean = false

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllPub()
  }
  toggle(){
    this.sort = !this.sort
  }


}
