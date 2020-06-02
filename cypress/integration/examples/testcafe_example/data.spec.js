describe('Write/Read data to JSON/Text File', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', { name: "James", age: 37 });
    })

    it('should write data into text fille', () => {
        cy.writeFile('log.txt', "Hello World!");
    });

    it('should read and verify data from a JSON file', () => {
        cy.readFile('log.json')
        .its('age')
        .should('eq', 37);
    });

    it('should read and verify data from a text file', () => {
        cy.readFile('log.txt').should('eq', "Hello World!")
    });
});