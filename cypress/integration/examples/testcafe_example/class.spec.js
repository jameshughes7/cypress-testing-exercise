class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/');
    }

    static wait(number) {
        cy.wait(number);
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView();
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView();
    }
}

describe('Abstraction with classes', () => {
    before(function() {
        //runs before all tests inside describe
        //setup test data or test context
        //seed or reset the database
        HomePage.loadHomePage();
    })

    after(function() {
        //runs agter all tests inside the describe block are done
        //test clean up
        //clean cookies or localstorage
    })

    beforeEach(function() {
        //runs before each it block it in the describe
    })

    afterEach(function() {
        //runs after each it in the describe
    })

    it('should scroll down and up the page', () => {
        HomePage.loadHomePage();
        HomePage.scrollToBottom();
        HomePage.wait(5000);
        HomePage.scrollToTop();
        HomePage.wait(3000);
    });
});