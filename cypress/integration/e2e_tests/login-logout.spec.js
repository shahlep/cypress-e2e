/// <reference types="cypress" />

describe('Login Logout e2e test', () => {
    it('visit website', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
    })
    
    it('should try with invalid credentials', () => {
        //code
    })

    it('should display error message', () => {
        //code
    })

    it('should try with valid credentials', () => {
        //code
    })

    it('should try logout', () => {
        //code
    })
})
