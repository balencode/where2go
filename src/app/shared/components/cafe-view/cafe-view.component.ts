import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-cafe-view',
  templateUrl: './cafe-view.component.html',
  styleUrls: ['./cafe-view.component.scss']
})
export class CafeViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
