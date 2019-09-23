import { BaseComponent} from 'e2e/base-component.ts';
import { by, ElementFinder, ProtractorBrowser } from 'protractor';

export class SelectLinkComponent extends BaseComponent {
  linkAll: LinkComponent;
  linkEUR: LinkComponent;
  linkUSD: LinkComponent;
  linkGBP: LinkComponent;
  linkAUD: LinkComponent;
  linkNZD: LinkComponent;

  constructor(browser: ProtractorBrowser, root: ElementFinder) {
    super(browser, root);

    this.linkAll = new LinkComponent(
      browser,
      root.element(by.qaTag('accountnumber_input'))
    );
    this.linkEUR = new LinkComponent(
      browser,
      root.element(by.qaTag('lastname_input'))
    );
    this.linkUSD = new LinkComponent(
      browser,
      root.element(by.qaTag('firstname_input'))
    );
    this.linkGBP = new LinkComponent(
      browser,
      root.element(by.qaTag('firstname_input'))
    );
    this.linkAUD = new LinkComponent(
      browser,
      root.element(by.qaTag('repId_input'))
    );
    this.linkNZD = new LinkComponent(
      browser,
      root.element(by.qaTag('state_input'))
    );
  }
}
