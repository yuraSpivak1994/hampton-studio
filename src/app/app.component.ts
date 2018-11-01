import {Component, OnInit} from '@angular/core';
import {fadeAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})

export class AppComponent implements OnInit {
  display: boolean;
  policy: boolean;


  constructor() {
  }


  ngOnInit() {
  }
}
