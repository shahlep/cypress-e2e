/// <reference types="cypress" />

describe('Feedback form e2e', () => {
  it('visit webiste', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include','index.html')
  }) 

  it('should display feedback content', () => {
      //code
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