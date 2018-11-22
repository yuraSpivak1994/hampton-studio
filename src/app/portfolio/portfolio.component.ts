import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {RouterHelpService} from '../other/router-help.service';
import {FadeAnimation} from '../other/fade-animation';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('readMore', [
      state('showDescription', style({
        overflow: 'hidden',
        height: '40%',
      })),
      state('hideDescription', style({
        overflow: 'hidden',
        height: '100%',
      })),
      transition('showDescription <=> hideDescription', animate(500))
    ])
  ]
})
export class PortfolioComponent extends FadeAnimation {

  public imageIsShowing = false;
  public isPopupShowing = true;
  public index: any = 0;

  public portfolio: Array<Object> ;


  constructor(protected helper: RouterHelpService) {
    super(helper);
    this.portfolio = [
      {
        year: 2013,
        title: 'lorem gj gjyg ygjyegjyqgew ew q gewqg',
        description: 'Lorem ipsum dolor sit amet, consec' +
          'tetur adipisicing elit. Autem consectetur consequ' +
          'untur cum cupiditate deserunt, exercitationem explic' +
          'abo hic incidunt,' +
          ' inventore neque nulla pariatur provident ' +
          'quasi quos ratione reprehenderit sequi tempore, velit. ',
        video: 'https://www.youtube.com/embed/IiXqXTR2Cm0',
        isShow: false,
        image: 'http://blogs.staffs.ac.uk/research/files/2014/02/Design-and-innovation.jpg'
      }, {
        year: 2012,
        title: 'lorem gj gjyg ygjyegjyqgew ew q gewqg',
        description: 'Lorem ipsum dolor sit amet,' +
          ' consectetur adipisicing elit. Autem consectetur consequuntur c' +
          'um cupiditate deserunt, exercitationem explicabo hic incidunt,' +
          ' inventore neque nulla pariatur provident ' +
          'quasi quos ratione reprehenderit sequi tempore, velit. ',
        video: 'https://www.youtube.com/embed/IiXqXTR2Cm0',
        isShow: false,
        image: 'https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
      }];
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
}
