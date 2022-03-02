/// <reference types="cypress" />

describe('New Payee e2e tests', () => {
  
    it('visit website', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
    })

    it('should login with valid credentials', () => {
        cy.get('#signin_button').click()
        cy.url().should('include','login.html')
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.contains('Sign in').click()
        cy.url().should('include','account-summary.html')
    })


})