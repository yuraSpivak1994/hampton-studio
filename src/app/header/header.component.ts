import { Component, OnInit } from '@angular/core';
import {RouterDelay} from '../other/router-delay';
import {Router} from '@angular/router';
import {RouterHelpService} from '../other/router-help.service';
import {FIRST_TIME_ROUTE_DELAY, PortfolioPageContent} from '../other/constant';
import {UserService} from '../service';

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
  public portfolioContent = new PortfolioPageContent();
  slideConfig = {'slidesToShow': 3, 'slidesToScroll': 1};
  public pageActual = 300;
  portfolio: any;

  constructor(protected router: Router, protected helper: RouterHelpService, private userService: UserService) {
    super(router, helper);
  }
  public showSlider(): void {
    this.isSliderShowing = true;
  }

  public hideSlider(): void {
    this.isSliderShowing = false;
  }

  public showPolicy(): void {
    if (this.isPolicyShow === false && this.isPolicyHide === true) {
      this.isPolicyShow = true;
      this.isPolicyHide = false;
    } else {
      this.isPolicyShow = false;
      this.isPolicyHide = true;
    }
  }

  private getPortfolio(): void {
    this.userService.getPortfolioContent(this.pageActual)
      .subscribe((data: any) => {
        this.portfolioContent.portfolios = data.portfolios;
        this.sortPortfolioSlider(data);
      }, err => {
        console.log(err);
      });
  }

  public toggleImageToVideo(slide) {
    const imageToVideo = new RegExp('(hamptonstudioblob.blob.core.windows.net\/images\/)');
    const response = imageToVideo.test(slide);
    if (imageToVideo) {
      return !response;
    } else {
      return;
    }
  }

  // public sortPortfolioSlider(data) {
  //   const portfolio = data;
  //   let category: any;
  //   for (const key in portfolio.portfolios) {
  //     // category = portfolio.portfolios[key].splice(0, 3);
  //   }
  //   console.log(JSON.stringify(data.portfolios))
  // }
  public sortPortfolioSlider({ portfolios }: PortfolioPageContent) {

    // const sorted = [];
    //     // const maxNestedItems = 3;
    //     // const nestedArraysCount = Math.ceil(portfolios.length / maxNestedItems);
    //     //
    //     // for (let i = 0; i < nestedArraysCount; i++) {
    //     //   sorted.push([portfolios.splice(0, maxNestedItems)]);
    //     // }
    const sorted = portfolios.splitToChunks(3);
    this.portfolio = sorted
    console.log(this.portfolio)
    return sorted;
  }

  ngOnInit() {
    setTimeout(() => {
      this.isShowPages = true;
    }, FIRST_TIME_ROUTE_DELAY);
    this.getPortfolio();
  }
}
