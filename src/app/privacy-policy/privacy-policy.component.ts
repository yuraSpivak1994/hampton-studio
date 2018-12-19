import { Component, OnInit } from '@angular/core';
import {UserService} from '../service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  public contentPolicy: any;

  constructor(private userService: UserService) { }

  private fetchPolicy(): void {
    this.userService.getPolicyContent()
      .subscribe(data => {
        this.contentPolicy = data;
      }, err => {
        alert(`ERORKA`);
      });
  }

  ngOnInit() {
    setTimeout(() => {
      this.fetchPolicy();
    }, 5);
  }
}
