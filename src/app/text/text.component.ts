import { Component } from '@angular/core';
import { FadeAnimation } from '../other/fade-animation';
import { RouterHelpService } from '../other/router-help.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends FadeAnimation {
  constructor(protected helper: RouterHelpService) {
    super(helper);
  }
}
