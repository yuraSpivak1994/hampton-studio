import { Component } from '@angular/core';
import { FadeAnimation } from '../other/fade-animation';
import { RouterHelpService } from '../other/router-help.service';
import {UserService} from '../service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends FadeAnimation {
  public textPageContent = {
  title: '',
  topMediaBlock: '',
  description: '',
  bottomMediaBlock: ''
}
  constructor(protected helper: RouterHelpService, private userService: UserService) {
    super(helper);
  }
  private getText(): void {
    this.userService.getTextContent()
      .subscribe((data: any) => {
        this.textPageContent =  data;
      });
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
  onInit() {
    this.getText();
  }
}
