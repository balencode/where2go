import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-park-view',
  templateUrl: './park-view.component.html',
  styleUrls: ['./park-view.component.scss']
})
export class ParkViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
