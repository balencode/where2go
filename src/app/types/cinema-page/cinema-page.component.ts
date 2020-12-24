import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-cinema-page',
  templateUrl: './cinema-page.component.html',
  styleUrls: ['./cinema-page.component.scss']
})
export class CinemaPageComponent implements OnInit {
  posts$: Observable<Post[]>
  searchStr = ''
  sort:boolean = false

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllCinema()
  }
  toggle(){
    this.sort = !this.sort
  }

}
