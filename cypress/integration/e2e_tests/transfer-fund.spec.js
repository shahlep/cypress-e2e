/// <reference types="cypress" />

describe('transfer funds e2e tests', () => {
  
    before(() => {
        //mock website
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
        cy.url().should('include','login.html')
        cy.login('username','password')
    })

    it('should be in transfer fund page,', () => {
      cy.contains('Transfer Funds').click()
      cy.get('#tf_fromAccountId').select('3')
      cy.get('#tf_toAccountId').select('2')
      cy.get('#tf_amount').type('500')
      cy.get('#tf_description').type('test text test text test text')
      cy.get('#btn_submit').click()
      cy.get('h2').should('be.visible').and('contain','Transfer Money & Make Payments - Verify')
      cy.get('#btn_submit').click()
  }) 
})