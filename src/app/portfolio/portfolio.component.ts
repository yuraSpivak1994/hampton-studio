import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {RouterHelpService} from "../other/router-help.service";
import { FadeAnimation } from '../other/fade-animation';

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
export class PortfolioComponent  extends FadeAnimation {

  portfolio: any = [
    {
      title: 'lorem gj gjyg ygjyegjyqgew ew q gewqg jwhgd wg qwygdjygwd  ywgyqwg ywqge ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur consequuntur cum cupiditate deserunt, exercitationem explicabo hic incidunt,' +
        ' inventore neque nulla pariatur provident ' +
        'quasi quos ratione reprehenderit sequi tempore, velit. ',
      id: 2
    },
    {
      title: 'lorem gj gjyg ygjyegjyqgew ew q gewqg jwhgd wg qwygdjygwd  ywgyqwg ywqge ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur consequuntur cum cupiditate deserunt, exercitationem explicabo hic incidunt,' +
        ' inventore neque nulla pariatur provident ' +
        'quasi quos ratione reprehenderit sequi tempore, velit. ',
      id:3
    }];
  openReadMore = 'showDescription';
  public showDesc: boolean = false;
  public hideDesc: boolean = true;
  // addClass() {
  //   this.openReadMore = this.openReadMore === 'showDescription' ? 'hideDescription' : 'showDescription'
  // }
  changeClass() {
    if(this.showDesc === false && this.hideDesc === true){
      this.showDesc = true;
      this.hideDesc = false
    }else {
      this.showDesc = false;
      this.hideDesc = true
    }
  }
  constructor(protected helper: RouterHelpService) {
    super(helper);
  }


}
