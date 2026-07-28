import './commands'

import { mount } from 'cypress/react'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount,
      getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>,
    }
  }
}

Cypress.Commands.add('mount', mount)
