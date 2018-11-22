import { Component, OnInit } from '@angular/core';
import {RouterDelay} from '../other/router-delay';
import {Router} from '@angular/router';
import {RouterHelpService} from '../other/router-help.service';
import {FIRST_TIME_ROUTE_DELAY} from '../other/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends RouterDelay implements OnInit {

  public isSliderShowing = false;
  public isPolicyShow = false;
  public isPolicyHide = true;
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
    if (this.isPolicyShow === false && this.isPolicyHide === true){
      this.isPolicyShow = true;
      this.isPolicyHide = false;
    } else {
      this.isPolicyShow = false;
      this.isPolicyHide = true;
    }
  }

  slides = [
    {
      img: 'https://media.gettyimages.com/photos/high-angle-view-of-girl-in-swimming-pool-picture-id965607298',
      title: 'Title',
      year: 2018
    },
    {
      img: 'https://media.gettyimages.com/photos/high-angle-view-of-girl-in-swimming-pool-picture-id965607298',
      title: 'Title',
      year: 2018
    },
    {
      img: 'https://media.gettyimages.com/photos/high-angle-view-of-girl-in-swimming-pool-picture-id965607298',
      title: 'Title',
      year: 2018
    },
    {
      img: 'https://media.gettyimages.com/photos/high-angle-view-of-girl-in-swimming-pool-picture-id965607298',
      title: 'Title',
      year: 2014
    }
  ];
  slideConfig = {'slidesToShow': 3, 'slidesToScroll': 1};

  ngOnInit() {
    setTimeout(() => {
      this.isShowPages = true;
    }, FIRST_TIME_ROUTE_DELAY);
  }

}
