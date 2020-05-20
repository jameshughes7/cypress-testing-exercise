describe('Browser actions', () => {
    it('should load the correct url', () => {
        cy.visit("https://www.checkout.com/", {timeout: 10000 });
    });

    it('should check the correct url', () => {
        cy.url().should('include', 'checkout');
    });

    it('should check for correct url', () => {
        cy.get('#revolving-text > h1.GeneralStylesc__Heading1-s1al9y-1.cZSkBk').should('be.visible');  
    });
});