import { OnDestroy, OnInit } from '@angular/core';
import { RouterHelpService } from './router-help.service';

export abstract class FadeAnimation implements OnInit, OnDestroy {
  public isFadeIn = false;
  public isFadeOut = false;
  private subscription: any;

  protected constructor(protected helper: RouterHelpService) {}

  public ngOnInit(): void {
    this.fadeIn();

    this.subscription = this.helper.$pageLeaveStream.subscribe(() => {
      this.fadeOut();
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public fadeOut(): void {
    this.isFadeIn = false;
    this.isFadeOut = true;
  }

  public fadeIn(): void {
    this.isFadeIn = true;
    this.isFadeOut = false;
  }
}
