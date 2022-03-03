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
        cy.contains('Find Transactions').click()
        //cy.get('#aa_description').type('test text')
        //cy.get('#aa_fromDate').type('2022-01-01 {enter}')
        //cy.get('#aa_toDate').type('2022-03-03 {enter}')
        cy.get('#aa_fromAmount').type('50')
        cy.get('#aa_toAmount').type('2000')
        cy.get('button[type="submit"]').click()
    })
})