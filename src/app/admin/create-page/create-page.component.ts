import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";
import {global} from "@angular/compiler/src/util";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})

export class CreatePageComponent implements OnInit {

  form: FormGroup
  baseName: string

  constructor(
    private postsService: PostsService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      about: new FormControl(null, Validators.required),
      place: new FormControl(null, Validators.required)

    })
  }

  submit(){
    if (this.form.invalid){
      return
    }
    //this.form.value.type = document.getElementById("type").value
    // if ((this.form.value.type === '')){
    //   console.log('test')
    //   alert('Choose type of place!')
    //   return
    // }
    console.log(this.form)
    console.log(this.form.value.type)
    const post: Post = {
      type: this.form.value.type,
      name: this.form.value.name,
      about: this.form.value.about,
      place: this.form.value.place,
    }
    this.baseName = this.form.value.type
    console.log(this.baseName)
    global.baseN =  this.baseName
    console.log(global.baseName + 'test')

    this.postsService.create(post).subscribe(() =>{
      this.form.reset()
      this.alert.success('Post was created')
    })
  }

}
