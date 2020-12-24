import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../shared/posts.service";
import {switchMap} from "rxjs/operators";
import {Post} from "../../shared/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  post: Post
  submitted = false

  uSub: Subscription

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) =>{
        console.log(params['id'])
        console.log(params['type'])
        return this.postsService.getById(params['id'],params['type'])
      })
    ).subscribe((post: Post) =>{
      this.post = post
      console.log('test')
      //console.log(post)
      this.form = new FormGroup({
        name: new FormControl(post.name, Validators.required),
        about: new FormControl(post.about, Validators.required),
        place: new FormControl(post.place, Validators.required)
      })
      console.log(post.place)
    })
    //console.log(this.form)

  }

  ngOnDestroy() {
    if (this.uSub){
      this.uSub.unsubscribe()
    }
  }

  submit() {
    if (this.form.invalid){
      return
    }
    this.submitted = true
    this.uSub =  this.postsService.update({
      ...this.post,
      about: this.form.value.about,
      place: this.form.value.place,
      name: this.form.value.name
    }).subscribe(() =>{
      this.submitted = false
      this.alert.success('Post has been updated')
    })
  }
}
