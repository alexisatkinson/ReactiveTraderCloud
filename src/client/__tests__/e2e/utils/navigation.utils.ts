import { ProtractorBrowser } from 'protractor';

export async function ngNavigate(browser: ProtractorBrowser, url: string) {
  // The following script will be run in the browser. Disabling linter because
  // it will follow the ES5-ish rules.
  // tslint:disable
  let window: any;

  const success = await browser.executeAsyncScript(function(url, callback) {
    window
      .ngNavigate(url)
      .then(function() {
        callback(true);
      })
      .catch(function(err) {
        console.error('Error occurred while navigating: ' + err.message);
        callback(false);
      });
  }, url);
  // tslint:enable

  if (!success) {
    throw new Error(
      'Unable to navigate using the Angular Router. See the logs for more information'
    );
  }
}
