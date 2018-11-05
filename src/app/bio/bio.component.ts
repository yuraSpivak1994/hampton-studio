import { Component } from '@angular/core';
import { FadeAnimation } from '../other/fade-animation';
import { RouterHelpService } from '../other/router-help.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent extends FadeAnimation {

  constructor(protected helper: RouterHelpService) {
    super(helper);
  }
}
