import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-theater-view',
  templateUrl: './theater-view.component.html',
  styleUrls: ['./theater-view.component.scss']
})
export class TheaterViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
