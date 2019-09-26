import { by, ElementFinder, ProtractorBrowser } from 'protractor'
import { AnalyticsComponent } from './analytics.component'
import { BlotterComponent } from './blotter.component'
import { WorkspaceComponent } from './workspace.component'

const CONNECTED_REGEX = /^Connected to .*$/gi

export class MainPage {
  workspace: WorkspaceComponent
  analytics: AnalyticsComponent
  blotter: BlotterComponent

  constructor(private browser: ProtractorBrowser) {
    this.workspace = new WorkspaceComponent(browser, browser.element(by.qa('workspace__tiles-workspace')))
    this.analytics = new AnalyticsComponent(browser, browser.element(by.qa('shell-route__analytics-wrapper')))
    this.blotter = new BlotterComponent(browser, browser.element(by.qa('shell-route__blotter-wrapper')))
  }

  async isConnected() {
    const connectionElement = this.browser.element(by.qa('status-button__toggle-button'))
    return connectionElement.isPresent()
  }
}
