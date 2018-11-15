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
      year: 2013,
      title: 'lorem gj gjyg ygjyegjyqgew ew q gewqg jwhgd wg qwygdjygwd  ywgyqwg ywqge ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur consequuntur cum cupiditate deserunt, exercitationem explicabo hic incidunt,' +
        ' inventore neque nulla pariatur provident ' +
        'quasi quos ratione reprehenderit sequi tempore, velit. ',
      isShow: false
    },
    {
      title: 'lorem gj gjyg ygjyegjyqgew ew q gewqg jwhgd wg qwygdjygwd  ywgyqwg ywqge ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur consequuntur cum cupiditate deserunt, exercitationem explicabo hic incidunt,' +
        ' inventore neque nulla pariatur provident ' +
        'quasi quos ratione reprehenderit sequi tempore, velit. ',
      isShow: false
    }];


  changeClass(item) {
      if(item.isShow === false){
        item.isShow = true;
      }else {
        item.isShow = false;
      }

}
  constructor(protected helper: RouterHelpService) {
    super(helper);
  }


}
