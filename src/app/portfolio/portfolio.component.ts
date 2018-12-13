import {Component} from '@angular/core';
import {RouterHelpService} from '../other/router-help.service';
import {FadeAnimation} from '../other/fade-animation';
import {UserService} from '../service';
import {PortfolioPageContent} from '../other/constant';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent extends FadeAnimation {

  public imageIsShowing = false;
  public isPopupShowing = false;
  public index: any = 0;
  public pageActual = 300;
  public previewPortfolio = null;

  public portfolioContent = new PortfolioPageContent();


  constructor(protected helper: RouterHelpService, private userService: UserService) {
    super(helper);
  }

  changeClass(item) {
    item.isShow = !item.isShow;
  }

  togleImage() {
    this.imageIsShowing = !this.imageIsShowing;
  }

  openPopup(index, portfolio) {
    this.index = index;
    this.previewPortfolio = portfolio;
    this.isPopupShowing = true;
  }

  cancelPopup() {
    this.previewPortfolio = null;
    this.isPopupShowing = false;
  }


  public toggleImageToVideo(item) {
    const imageToVideo = new RegExp('(hamptonstudioblob.blob.core.windows.net\/images\/)');
    const response = imageToVideo.test(item);
    if (imageToVideo) {
      return !response;
    } else {
      return;
    }
  }

  private getPortfolio(): void {
    this.userService.getPortfolioContent(this.pageActual)
      .subscribe((data: any) => {
        this.portfolioContent.portfolios = data.portfolios;
        this.portfolioContent.portfolios = this.portfolioContent.portfolios.sort((prev: any, next: any) => {
          return +new Date(prev.date) - +new Date(next.date);
        });
      }, err => {
        console.log(err);
      });
  }

  onInit() {
    this.getPortfolio();
  }
}
