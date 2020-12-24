import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-pub-view',
  templateUrl: './pub-view.component.html',
  styleUrls: ['./pub-view.component.scss']
})
export class PubViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
