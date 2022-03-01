/// <reference types="cypress" />

describe('e2e tests', () => {
  it('Search e2e tests', () => {
      cy.visit('https://www.google.com/')
      cy.get('#L2AGLb > .QS5gu').click()
      cy.get('.gLFyf').type('gmail {enter}')
      cy.get('h3').contains('Gmail')
  })  
})