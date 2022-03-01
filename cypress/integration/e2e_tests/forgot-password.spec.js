/// <reference types="cypress" />

describe('e2e test scenario 2- forgot password', () => {
    it('visit site and click on the sign-in button', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()

    })
    it('should click on the forgot password', () => {
        cy.get('.offset3 > a').click()       
    })

    it('should fill email form', () => {
        cy.get('#user_email').type('a@haha.com')
    })

    it('should submit the form', () => {
        cy.contains('Send Password').click()
    })


})