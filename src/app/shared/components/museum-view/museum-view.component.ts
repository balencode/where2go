import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-museum-view',
  templateUrl: './museum-view.component.html',
  styleUrls: ['./museum-view.component.scss']
})
export class MuseumViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
