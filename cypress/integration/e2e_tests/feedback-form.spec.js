/// <reference types="cypress" />

describe('Feedback form e2e', () => {
  it('visit webiste', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include','index.html')
  }) 

  it('should display feedback content', () => {
    cy.contains('Feedback').click()
    cy.url().should('include','feedback.html')
    cy.get('h3').should('be.visible')
  })

  it('should load feedback form', () => {
      //code
  })

  it('should fill the feedback form', () => {
      //code
  })

  it('should submit feedback form', () => {
      //code
  })

  it('should display feedback message', () => {
      //code
  })
})