
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
    return `http://hampton-studio-api.azurewebsites.net/api/`;
  }
}
