/// <reference types="cypress" />

describe('navbar e2e', () => {
    it('visit webiste', () => {
      cy.visit('http://zero.webappsecurity.com/index.html')
      cy.url().should('include','index.html')
    })

    it('should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('should display feedback content', () => {
      //code  
    })

    it('should display homepage content', () => {
        //code  
      })
    
})