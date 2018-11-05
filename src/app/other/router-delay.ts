import { Router } from '@angular/router';
import { NAVIGATION_DELAY } from './constant';
import { RouterHelpService } from './router-help.service';

export abstract class RouterDelay {
  protected constructor(protected router: Router, protected helper: RouterHelpService) {}

  public navigate(route: any): void {
    this.helper.updatePageStream();
    setTimeout(() => {
      this.router.navigate([route]);
    }, NAVIGATION_DELAY);
  }
}
