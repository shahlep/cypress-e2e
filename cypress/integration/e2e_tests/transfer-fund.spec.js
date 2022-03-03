/// <reference types="cypress" />

describe('transfer funds e2e tests', () => {
  
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
        cy.url().should('include','login.html')
        cy.login('username','password')
    })

    it('should be in transfer fund page,', () => {
      cy.contains('Transfer Funds').click()
  }) 
})