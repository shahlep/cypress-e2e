/// <reference types="cypress" />

describe('Login Logout e2e test', () => {
    it('visit website', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
    })
    
    it('should try with invalid credentials', () => {
        cy.get('#signin_button').click()
        cy.url().should('include','login.html')
        cy.get('#user_login').type('lalalala')
        cy.get('#user_password').type('lalalala')
        cy.contains('Sign in').click()
    })

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain','Login and/or password are wrong.')
    })

    it('should try with valid credentials', () => {
        //cy.get('#signin_button').click()
        cy.url().should('include','login.html')
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.contains('Sign in').click()
    })

    it('should try logout', () => {
        cy.url().should('include','account')
        cy.get('.icon-user').click()
        cy.get('#logout_link').click()
        cy.url().should('include','index.html')
    })
})
