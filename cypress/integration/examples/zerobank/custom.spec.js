describe('Custom Commands', () => {
    it('should login to application using Custom Cypress command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password');
    });
});