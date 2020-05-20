describe('Browser actions', () => {
    it('should load the correct url', () => {
        cy.visit("https://www.checkout.com/", {timeout: 10000 });
        cy.url().should('include', 'checkout');
    });

    // explicit wait for 3 seconds
    it('should wait for 3 seconds', () => {
        cy.wait(3000);
    });

    // pause the execution of the tests
    it('should pause the execution', () => {
        cy.pause();
    });

    it('should check for correct url', () => {
        cy.get('#revolving-text > h1.GeneralStylesc__Heading1-s1al9y-1.cZSkBk').should('be.visible');  
    });

    it('should click on Know more button', () => {
        cy.get('#homepage-hero-btn').should('contain.text', 'Know more')
    });
});