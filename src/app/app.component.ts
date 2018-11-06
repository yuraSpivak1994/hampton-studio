import {Component, OnInit} from '@angular/core';
import {fadeAnimation} from './animations';
import {FIRST_TIME_ROUTE_DELAY} from './other/constant';
import {RouterDelay} from './other/router-delay';
import {Router} from '@angular/router';
import {RouterHelpService} from './other/router-help.service';

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

  slides = [
    {
      img: "https://media.gettyimages.com/photos/high-angle-view-of-girl-in-swimming-pool-picture-id965607298",
      title: "Title",
      year: 2018
    },
    {
      img: "https://media.gettyimages.com/photos/high-angle-view-of-girl-in-swimming-pool-picture-id965607298",
      title: "Title",
      year: 2018
    },
    {
      img: "https://media.gettyimages.com/photos/high-angle-view-of-girl-in-swimming-pool-picture-id965607298",
      title: "Title",
      year: 2018
    },
    {
      img: "https://media.gettyimages.com/photos/high-angle-view-of-girl-in-swimming-pool-picture-id965607298",
      title: "Title",
      year: 2014
    }
  ];
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};


  ngOnInit() {
    setTimeout(() => {
      this.isShowPages = true;
    }, FIRST_TIME_ROUTE_DELAY);
  }
}
