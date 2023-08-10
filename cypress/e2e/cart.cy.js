/// <reference types="cypress" />

describe('Cart Page Functionality', () => {
    let textSpan;

    beforeEach(() => {
        cy.visit('/');
    });

    before(() => {
        cy.takeText().then(text => {
            textSpan = text;
         });
    });

    it('should show the datails of the product added to the cart', () => {
        cy.addToCart(1);
        cy.get('.sc-ieZDjg > a').click();

        cy.contains('span', textSpan).should('be.visible');
     });

    it('should remove product to cart', () => {
        cy.addToCart(1);
        cy.addToCart(2);
        
        cy.get('.sc-ieZDjg > a').click();
        cy.get('tbody tr')
            .should('be.visible')
            .and('have.length', 2);
        cy.get('tr .sc-eDDNvR')
            .first()
            .click();

        cy.toastMessage('Produto removido do carrinho com sucesso!');
        cy.get('tbody tr').should('have.length', 1);
    });

    it('should display a message if there is no product in the cart ', () => {
        cy.get('.sc-ieZDjg > a').click();
        cy.get('.sc-jTrPJq svg').should('be.visible');
        cy.get('.container h1').should('have.text', 'Você ainda não tem nenhum produto adicionado ao carrinho');
    });
});