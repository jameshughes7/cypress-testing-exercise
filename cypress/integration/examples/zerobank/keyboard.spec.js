describe('Keyboard press simulation', () => {
    it('should submit searchbox with pressing enter', () => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#searchTerm').type('Some random text {enter}')
            //See this url for more keyboard commands: https://docs.cypress.io/api/commands/type.html#Syntax
    });
});