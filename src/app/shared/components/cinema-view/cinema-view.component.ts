import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-cinema-view',
  templateUrl: './cinema-view.component.html',
  styleUrls: ['./cinema-view.component.scss']
})
export class CinemaViewComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
