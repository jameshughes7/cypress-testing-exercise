describe('Browser actions', () => {
	it('Shoulld load books website', () => {
		cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 });
        cy.url().should('include', 'index.html');
        cy.log('Before Reload');
        cy.reload();
        cy.log('After Reload');
	});

	it('should click on Travel Category', () => {
		cy.get('a').contains('Travel').click();
		cy.get('h1').contains('Travel');
	});

	it('should display correct number of books', () => {
		cy.get('.product_pod').its('length').should('eq', 11);
    });
    
    it('should click on poetry category', () => {
        cy.get('a').contains('Poetry').click();
    });

    it('should click on Olio book detail', () => {
        cy.get('a').contains('Olio').click();
    });

    it('should have the correct price tag', () => {
        cy.get('.price_color').contains('23.88');
    });
});
