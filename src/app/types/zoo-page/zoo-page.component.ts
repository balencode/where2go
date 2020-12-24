import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../shared/posts.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-zoo-page',
  templateUrl: './zoo-page.component.html',
  styleUrls: ['./zoo-page.component.scss']
})
export class ZooPageComponent implements OnInit {

  posts$: Observable<Post[]>
  searchStr = ''
  sort:boolean = false

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllZoo()
  }
  toggle(){
    this.sort = !this.sort
  }


}
