describe('Working with inputs', () => {
    it('should visit zero bank login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
    });

    it('should fill username', () => {
        cy.get('#user_login').as('username');
        cy.get('@username').clear();
        cy.get('@username').type('Some invalid name', { delay: 50 });
    })

    it('should fill password', () => {
        cy.get('#user_password').as('password');
        cy.get('@password').clear();
        cy.get('@password').type('Some invalid password', { delay: 50 });
    });

    it('should tick the keep me signed in checkbox', () => {
        //element selector using id
        cy.get('#user_remember_me').click();
        //element selector using attribute
        cy.get('input[type="checkbox"]').click();
    });

    it('should submit login form', () => {
        cy.contains('Sign in').click();
    });

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible')
        .and('contain', 'Login and/or password are wrong.');
    });
});