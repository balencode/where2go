import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-aquapark-view',
  templateUrl: './aquapark-view.component.html',
  styleUrls: ['./aquapark-view.component.scss']
})
export class AquaparkViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
