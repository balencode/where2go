import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-sauna-view',
  templateUrl: './sauna-view.component.html',
  styleUrls: ['./sauna-view.component.scss']
})
export class SaunaViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
