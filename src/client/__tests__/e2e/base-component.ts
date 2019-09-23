import { ElementFinder, ProtractorBrowser } from 'protractor';

import {
  waitForElementToBeClickable,
  waitForElementToBeInvisible,
  waitForElementToBePresent,
  waitForElementToBeVisible,
  waitForElementToNotBePresent,
} from './utils/protractor.utils';

export abstract class BaseComponent {
  browser: ProtractorBrowser;
  root: ElementFinder;

  constructor(browser: ProtractorBrowser, root: ElementFinder) {
    this.browser = browser;
    this.root = root;
  }

  isPresent() {
    return this.root.isPresent();
  }

  isDisplayed() {
    return this.root.isDisplayed();
  }

  waitForComponentToBeVisible(timeout?: number) {
    return waitForElementToBeVisible(this.browser, this.root, timeout);
  }

  waitForComponentToBeInvisible(timeout?: number) {
    return waitForElementToBeInvisible(this.browser, this.root, timeout);
  }

  waitForComponentToBePresent(timeout?: number) {
    return waitForElementToBePresent(this.browser, this.root, timeout);
  }

  waitForComponentToNotBePresent(timeout?: number) {
    return waitForElementToNotBePresent(this.browser, this.root, timeout);
  }

  waitForComponentToBeClickable(timeout?: number) {
    return waitForElementToBeClickable(this.browser, this.root, timeout);
  }

  getQaTag() {
    return this.root.getAttribute('data-qa');
  }
}
