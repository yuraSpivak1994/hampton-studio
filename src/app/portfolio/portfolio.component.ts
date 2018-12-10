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
  public isPopupShowing = true;
  public index: any = 0;
  public pageActual = 300;

  public portfolioContent = new PortfolioPageContent()


  constructor(protected helper: RouterHelpService, private userService: UserService) {
    super(helper);
  }

  changeClass(item) {
    item.isShow = !item.isShow;
  }

  togleImage() {
    this.imageIsShowing = !this.imageIsShowing;
  }

  openPopup(index) {
    this.index = index;
    this.isPopupShowing = !this.isPopupShowing;
  }
  cancelPopup() {
    this.isPopupShowing = !this.isPopupShowing;
  }




  public toggleImageToVideo(item) {
    const imageToVideo = new RegExp('(hamptonstudioblob.blob.core.windows.net\/images\/)')
    const response = imageToVideo.test(item);
    console.log(item, response);
    return !response;
  }



  private getPortfolio(): void {
    this.userService.getPortfolioContent(this.pageActual)
      .subscribe((data: any) => {
        this.portfolioContent.portfolios = data.portfolios;
      }, err => {
        console.log(err);
      });
  }
  onInit() {
    this.getPortfolio();
  }
}
