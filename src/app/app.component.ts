import {Component, OnInit} from '@angular/core';
import {fadeAnimation} from './animations';
import { FIRST_TIME_ROUTE_DELAY } from './other/constant';
import { RouterDelay } from './other/router-delay';
import { Router } from '@angular/router';
import { RouterHelpService } from './other/router-help.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})

export class AppComponent extends RouterDelay implements OnInit {
  public isSliderShowing = false;
  public isPolicyShowing = false;
  public isShowPages = false;

  constructor(protected router: Router, protected helper: RouterHelpService) {
    super(router, helper);
  }

  public showSlider(): void {
    this.isSliderShowing = true;
  }

  public hideSlider(): void {
    this.isSliderShowing = false;
  }

  public showPolicy(): void {
    this.isPolicyShowing = true;
  }

  public hidePolicy(): void {
    this.isPolicyShowing = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.isShowPages = true;
    }, FIRST_TIME_ROUTE_DELAY);
  }
}
