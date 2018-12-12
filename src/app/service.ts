import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from './other/constant';

@Injectable()
export class UserService {
  private apiUrl = Config.apiUrl()

  constructor (private http: HttpClient) {}

  getBioContent () {
    return this.http.get(`${this.apiUrl}biography`);
  }
  getTextContent () {
    return this.http.get(`${this.apiUrl}text`);
  }
  getPortfolioContent(pageActual) {
    return this.http.get(`${this.apiUrl}portfolio/all/?skip=0&limit=${pageActual}`);
  }
  getPolicyContent () {
    return this.http.get(`${this.apiUrl}policy`);
  }

}
