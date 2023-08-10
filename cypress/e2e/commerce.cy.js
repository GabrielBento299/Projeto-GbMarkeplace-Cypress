/// <reference types="cypress" />

describe('Product Page Functionality', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    context('Add Product and Increase', () => {
        it('should display a message when add product in cart', () => {
            cy.addToCart(1);
            
            cy.toastMessage('Produto adicionado ao carrinho com sucesso!');
         });

         it('should increase the quantity when adding an item to the cart', () => {
            cy.addToCart(1);
            cy.get('.container .sc-dKfzgJ > span')
                .should('be.visible')
                .and('contain', '1');
    
            cy.addToCart(2);
            cy.get('.container .sc-dKfzgJ > span')
                .should('be.visible')
                .and('contain', '2');
        });
    });

    context('Remove Product and decrease', () => {
        it('should display a message when remove product in cart', () => {
            cy.addToCart(0);
            cy.removeToCart(0);
    
            cy.toastMessage('Produto removido do carrinho!');
         });
    
        it('should decrease the quantity when adding an item to the cart', () => {
            cy.addToCart(0);
    
            cy.get('.container .sc-dKfzgJ > span')
                .should('be.visible')
                .and('contain', '1');
    
            cy.removeToCart(0);
            cy.get('.container .sc-dKfzgJ > span')
                .should('be.visible')
                .and('contain', '0');
        });
    });
});

