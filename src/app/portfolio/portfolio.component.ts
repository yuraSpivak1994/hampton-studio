import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('readMore', [
      state('showDescription', style({
        overflow: 'hidden',
        height: '100px',
      })),
      state('hideDescription', style({
        overflow: 'visible',
        height: 'auto',
      })),
      transition('showDescription <=> hideDescription', animate(500))
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  openReadMore = 'showDescription';

  constructor() { }

  ngOnInit() {
  }

}
