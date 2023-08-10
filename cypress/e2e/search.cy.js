/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    const searchPhone = 'iPhone 13';
    const produtctNotExisten = 'Produto inexistente';

    beforeEach(() => {
        cy.visit('https://gb-markeplace-react.vercel.app');
    });
     it('should research a product with success', () => {
        cy.get('.container input').type(searchPhone);
        cy.get('.container-items strong').should('contain', searchPhone);
        cy.get('.sc-csCMJt')
            .should('be.visible')
            .and('exist');
    });

    it('should display an error when searching for a product that does not exist', () => {
        cy.get('input[placeholder="Pesquisar"]').type(produtctNotExisten);
        cy.get('.container img').should('be.visible');

        cy.get('.container .sc-fGFwAa span')
            .should('be.visible')
            .and('contain', `Nenhum resultado foi encontrado para "${produtctNotExisten}"`);
        cy.get('.sc-csCMJt').should('not.exist');
    });
});
