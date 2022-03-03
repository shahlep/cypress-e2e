/// <reference types="cypress" />

describe('show transactions e2e tests', () => {
    before(() => {
        //mock website
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
        cy.url().should('include','login.html')
        cy.login('username','password')
    }) 
    it('should be in account activity page and show transactions tab', () => {
        cy.contains('Account Activity').click()
        cy.get('#aa_accountId').select('2')
        
    })

    it('should display results', () => {
        cy.get('#all_transactions_for_account').should('be.visible')
        cy.get('tbody > tr').its('length').should('be.gt',0)
    })
    
})