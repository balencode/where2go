import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../shared/posts.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-pub-view-page',
  templateUrl: './pub-view-page.component.html',
  styleUrls: ['./pub-view-page.component.scss']
})
export class PubViewPageComponent implements OnInit {

  post$: Observable<Post>

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) =>{
        return this.postsService.getById(params['id'], 'pub' )
      }))
  }

}
