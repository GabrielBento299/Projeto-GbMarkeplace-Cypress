/// <reference types="cypress" />

describe('Product Page Functionality', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display a message when add product in cart', () => {
        cy.addToCart(1);
        
        cy.toastMessage('Produto adicionado ao carrinho com sucesso!');
     });

    it('should increase the quantity when adding an item to the cart', () => {
        cy.addToCart(1);
        cy.addToCart(2);
        cy.addToCart(3);


        cy.get('.container .sc-dKfzgJ > span')
            .should('be.visible')
            .and('contain', '3');
    });
});

