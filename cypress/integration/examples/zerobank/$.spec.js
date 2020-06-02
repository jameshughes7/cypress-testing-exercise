describe('', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    
    it('should expose jQuery element in the current window', () => {
        const signInButton = Cypress.$('#signin_button');
        signInButton.click();
    });
});