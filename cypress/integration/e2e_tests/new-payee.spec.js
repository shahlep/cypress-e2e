/// <reference types="cypress" />

describe('New Payee e2e tests', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
        cy.url().should('include','login.html')
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.contains('Sign in').click()
    })

    //it('should be in account summary page', () => {
       
   //     cy.url().should('include','account-summary.html')
     //   cy.contains('Pay Bills', {timeout: 10000}).click()
    //})

    it('should be in pay bills page, fill up the form and submit', () => {
        cy.contains('Pay Bills', {timeout: 10000}).click()
        cy.url().should('include','pay-bills.html')
        cy.contains('Add New Payee' ,{timeout:10000}).click()
        //cy.url().should('include','pay-bills-new-payee.html')
        cy.get('#np_new_payee_name').type('test')
        cy.get('#np_new_payee_address').type('test street 123')
        cy.get('#np_new_payee_account').type('basic')
        cy.get('#np_new_payee_details').type('text test')
        cy.get('#add_new_payee').click()
    })

    it('should show user created msg', () => {
        cy.get('#alert_content').should('be.visible').and('contain','The new payee test was successfully created.')

    })

})