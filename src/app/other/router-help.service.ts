import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterHelpService {
  private _bs = new Subject();
  constructor() { }

  public get $pageLeaveStream(): Observable<any> {
    return this._bs.asObservable().pipe(skipWhile(value => !value));
  }

  public updatePageStream(): void {
    this._bs.next(true);
  }
}
