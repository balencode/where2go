import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-zoo-view',
  templateUrl: './zoo-view.component.html',
  styleUrls: ['./zoo-view.component.scss']
})
export class ZooViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
