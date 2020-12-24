import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-nightclubtest-page',
  templateUrl: './nightclubtest-page.component.html',
  styleUrls: ['./nightclubtest-page.component.scss']
})
export class NightclubtestPageComponent implements OnInit {

  posts$: Observable<Post[]>
  searchStr = ''
  sort:boolean = false


  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllNightclub()
  }
  toggle(){
    this.sort = !this.sort
  }

}
