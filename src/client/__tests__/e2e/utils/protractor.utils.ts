import {
  ElementFinder,
  ExpectedConditions as EC,
  ProtractorBrowser,
} from 'protractor';

import { delay } from './async.utils';

const ENV_TIMEOUT = process.env.DEFAULT_TIMEOUT;
const DEFAULT_TIMEOUT = ENV_TIMEOUT ? parseInt(ENV_TIMEOUT, 10) : 5000;

export async function waitForUrlToContainer(
  browser: ProtractorBrowser,
  urlPart: string,
  timeout = DEFAULT_TIMEOUT
) {
  try {
    await browser.wait(
      browser.ExpectedConditions.urlContains(urlPart),
      timeout
    );
  } catch (err) {
    throw augmentWaitErrorWithUrl(err, urlPart);
  }
}

export const waitForElementToBeVisible = createWaitFunction(
  EC.visibilityOf.name,
  finder => EC.visibilityOf(finder)
);
export const waitForElementToBeInvisible = createWaitFunction(
  EC.invisibilityOf.name,
  finder => EC.invisibilityOf(finder)
);
export const waitForElementToBePresent = createWaitFunction(
  EC.presenceOf.name,
  finder => EC.presenceOf(finder)
);
export const waitForElementToNotBePresent = createWaitFunction(
  EC.stalenessOf.name,
  finder => EC.stalenessOf(finder)
);
export const waitForElementToBeClickable = createWaitFunction(
  EC.elementToBeClickable.name,
  finder => EC.elementToBeClickable(finder)
);

export async function waitForUrlToChange(
  browser: ProtractorBrowser,
  url: string,
  timeout = DEFAULT_TIMEOUT
) {
  const startTime = Date.now();
  let urlChanged = false;
  const retries = 10;

  do {
    const execTime = Date.now() - startTime;
    if (execTime > timeout) {
      throw new Error(
        `Timeout after ${execTime} ms waiting for URL to change (${url})`
      );
    }

    await delay(timeout / retries);
    const currentUrl = await browser.getCurrentUrl();

    urlChanged = currentUrl !== url;
  } while (!urlChanged);
}

export async function getClassNames(element: ElementFinder) {
  const rawClass = await element.getAttribute('class');
  return rawClass.split('').filter(className => !className);
}

function createWaitFunction(
  actionName: string,
  predicate: (finder: ElementFinder) => any
) {
  return async (
    browser: ProtractorBrowser,
    finder: ElementFinder,
    timeout = DEFAULT_TIMEOUT
  ) => {
    try {
      await browser.wait(predicate(finder), timeout);
    } catch (error) {
      throw augmentWaitErrorWithLocator(error, actionName, finder);
    }
  };
}

function augmentWaitErrorWithUrl(error: Error, urlPart: string) {
  error.message = `${error.message}. Expected url to contain ${urlPart}.`;
  return error;
}

function augmentWaitErrorWithLocator(
  error: Error,
  expectationName: string,
  finder: ElementFinder
) {
  const selector = finder.locator().toString();
  error.message = `${
    error.message
  } expecting ${expectationName} for selector ${selector}`;

  return error;
}
