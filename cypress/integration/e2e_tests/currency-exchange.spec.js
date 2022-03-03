/// <reference types="cypress" />

describe('Currency Exchange e2e tests', () => {
  
    before(() => {
        //mock website
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
        cy.url().should('include','login.html')
        cy.login('username','password')
    })

    it('should do new currency exchange and purcahse', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('EUR')
        cy.get('#pc_amount').type('2')
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()
        cy.get('#purchase_cash').click()
        
   })

})