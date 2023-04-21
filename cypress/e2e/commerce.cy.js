/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    beforeEach(() => {
        cy.visit('https://gb-markeplace-react.vercel.app');
    });
    it('Deve adicionar um produto ao carrinho', () => {
        cy.get('.container-items button').eq(1).click();

        cy.get('.Toastify__toast-body > :nth-child(2)')
            .should('have.text', 'Produto adicionado ao carrinho com sucesso!');
        cy.get('.container .sc-dKfzgJ > span').should('contain', '1');
    });

    it('Deve pesquisar um produto corretamente', () => {
        cy.get('.container input').type('samsung galaxy A53');
        cy.get('.container-items strong').should('contain.text', 'Samsung Galaxy A53');
        cy.get('.sc-iAEyYk').should('be.visible');
    });

    it('Deve exibir um erro ao pesquiar um produto que não existe', () => {
        cy.get('.container input').type('Teste');
        cy.get('.container .sc-fGFwAa span').should('contain.text', 'Nenhum resultado foi encontrado para "Teste"');
        cy.get('img').should('be.visible');
        cy.get('.sc-csCMJt ekdorv').should('not.exist');

    });
});

describe('Funcionalidade página de carrinho', () => {
    beforeEach(() => {
        cy.visit('https://gb-markeplace-react.vercel.app');
    });

    it('Deve mostar os detalhes do produto adicionado ao carrinho', () => {
        cy.get('.container-items button').eq(1).click();
        cy.get('.sc-ieZDjg > a').click();

        cy.get(':nth-child(2) > span').should('contain.text', 'Moto G42 Dual Sim 128 Gb');
    });

    it('Deve remover o produto do carrinho', () => {
        cy.get('.container-items button').eq(1).click();
        cy.get('.container-items button').last().click();
        cy.get('.container-items button').eq(2).click();
        cy.get('.sc-ieZDjg > a').click();
        
        cy.contains('tbody td span', 'Moto G42 Dual Sim 128 Gb Azul 4 Gb Ram')
            .closest('tr')
            .find('button')
            .click();
        
        cy.get('tbody tr').should('have.length', 2);
        
        cy.get('.Toastify__toast-body > :nth-child(2)')
            .should('contain.text', 'Produto removido do carrinho com sucesso!');
    });

    it('Deve mostar um texto caso não tenha produto no carrinho', () => {
        cy.get('.sc-ieZDjg > a').click();
        
        cy.get('.sc-jTrPJq svg').should('be.visible');
        cy.get('.container h1').should('have.text', 'Você ainda não tem nenhum produto adicionado ao carrinho');
        cy.get('.container a[href="/"]').should('have.attr', 'href', '/');
    });
});