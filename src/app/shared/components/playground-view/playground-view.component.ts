import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-playground-view',
  templateUrl: './playground-view.component.html',
  styleUrls: ['./playground-view.component.scss']
})
export class PlaygroundViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
