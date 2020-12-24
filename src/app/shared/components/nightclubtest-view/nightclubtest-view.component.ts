import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-nightclubtest-view',
  templateUrl: './nightclubtest-view.component.html',
  styleUrls: ['./nightclubtest-view.component.scss']
})
export class NightclubtestViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
