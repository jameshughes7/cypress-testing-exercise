describe('Working with inputs', () => {
    it('should visit zero bank login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
    });

    it('should fill username', () => {
        cy.get('#user_login').clear();
        cy.get('#user_login').type('Some invalid name', { delay: 50 });
    })

    it('should fill password', () => {
        cy.get('#user_password').clear();
        cy.get('#user_password').type('Some invalid password', { delay: 50 });
    });

    it('should submit login form', () => {
        cy.contains('Sign in').click();
    });

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible');
    });
});