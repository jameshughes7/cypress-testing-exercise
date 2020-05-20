describe('My first simple test with Cypress', () => {
    it('True should be true', () => {
        expect(true).to.eq(true);
    });

    it('5 should be 5', () => {
        expect(5).to.eq(5);
    });
});

describe('Another describe block', () => {
    it('false to be false', () => {
        expect(false).to.eq(false);
    });
});