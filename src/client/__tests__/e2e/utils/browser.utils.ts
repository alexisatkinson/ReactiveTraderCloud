import { ProtractorBrowser } from 'protractor';

export function setActiveBrowser(browser: ProtractorBrowser) {
  (global as any).browser = browser;
}

export async function withBrowserAsActive<T>(
  browser: ProtractorBrowser,
  action: () => T | Promise<T>
): Promise<T> {
  const previouslyActiveBrowser: ProtractorBrowser = (global as any).browser;

  try {
    setActiveBrowser(browser);

    const actionResult = action();
    const result = await Promise.resolve(actionResult);

    return result;
  } finally {
    setActiveBrowser(previouslyActiveBrowser);
  }
}

export async function withoutWaitForAngular<T>(
  browser: ProtractorBrowser,
  action: () => T | Promise<T>
): Promise<T> {
  try {
    await browser.waitForAngularEnabled(false);

    const actionResult = action();
    const result = await Promise.resolve(actionResult);

    return result;
  } finally {
    await browser.waitForAngularEnabled(true);
  }
}
