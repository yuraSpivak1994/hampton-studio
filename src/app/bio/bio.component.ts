import {Component, OnInit} from '@angular/core';
import { FadeAnimation } from '../other/fade-animation';
import { RouterHelpService } from '../other/router-help.service';
import {UserService} from '../service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent extends FadeAnimation {
  public contentBio: any = {
    pinkBlockText: '',
    whiteBlockText: '',
  };

  onInit() {
    this.fetchBio();
  }

  constructor(protected helper: RouterHelpService, private userServise: UserService) {
    super(helper);
  }
  private fetchBio(): void {
    this.userServise.getBioContent()
      .subscribe(data => {
        this.contentBio = data;
      }, err => {
        alert(`ERORKA`);
      });
    console.log(this.contentBio);
  }
}
