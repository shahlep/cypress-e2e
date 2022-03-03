/// <reference types="cypress" />

describe('New Payment e2e tests', () => {
  
    before(() => {
        //mock website
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
        cy.url().should('include','login.html')
        cy.login('username','password')
    })

    it('should send new payment', () => {
         cy.get('#pay_bills_tab').click()
         cy.contains('Pay Saved Payee').click()
         cy.get('#sp_payee').select('wellsfargo')
         cy.get('#sp_account').select('3')
         cy.get('#sp_amount').type('2')
         cy.get('#sp_date').type('2022-03-03 {enter}')
         cy.get('#sp_description').type('what you see is what you get')
         cy.get('#pay_saved_payees').click()
    })


})