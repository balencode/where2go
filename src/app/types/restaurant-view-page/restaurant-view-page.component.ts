import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../shared/posts.service";
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-restaurant-view-page',
  templateUrl: './restaurant-view-page.component.html',
  styleUrls: ['./restaurant-view-page.component.scss']
})
export class RestaurantViewPageComponent implements OnInit {

  post$: Observable<Post>

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) =>{
        return this.postsService.getById(params['id'], 'restaurant' )
      }))
  }

}
