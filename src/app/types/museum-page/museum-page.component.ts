import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-museum-page',
  templateUrl: './museum-page.component.html',
  styleUrls: ['./museum-page.component.scss']
})
export class MuseumPageComponent implements OnInit {

  posts$: Observable<Post[]>
  searchStr = ''
  sort:boolean = false


  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllMuseum()
  }
  toggle(){
    this.sort = !this.sort
  }

}
