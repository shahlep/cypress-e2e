/// <reference types="cypress" />

describe('Find transactions e2e tests', () => {
    before(() => {
        //mock website
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
        cy.url().should('include','login.html')
        cy.login('username','password')
    })
    
    it('should be in account activity page and find transactions', () => {
        cy.contains('Account Activity').click() 
    })
})