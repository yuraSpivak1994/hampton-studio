
/*
 * Delay, to display the page after animation end (in milisecond).
 */
export const FIRST_TIME_ROUTE_DELAY = 9000;

/*
 * Delay, between navigation.
 */
export const NAVIGATION_DELAY = 900;

export class Config {
  public static apiUrl(): string {
    return `http://hampton-studio-server.azurewebsites.net/api/`;
  }
}
export class PortfolioPageContent {
  portfolioCount: number;
  portfolios: Array<Portfolio>;
}
class Portfolio {
  media: string;
  description: string;
  title: string;
  date: any;
  isShow: string;
  id?: any;
}

