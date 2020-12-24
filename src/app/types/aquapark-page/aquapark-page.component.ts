import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-aquapark-page',
  templateUrl: './aquapark-page.component.html',
  styleUrls: ['./aquapark-page.component.scss']
})
export class AquaparkPageComponent implements OnInit {

  posts$: Observable<Post[]>
  searchStr = ''
  sort:boolean = false
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllAquapark()
  }
  toggle(){
    this.sort = !this.sort
  }
}
