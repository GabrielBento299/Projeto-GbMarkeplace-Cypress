Cypress.Commands.add('searchProduct', productName => {
    cy.visit('/');
    cy.get('input[placeholder="Pesquisar"]').type(productName);
});

Cypress.Commands.add('takeText', () => {
    cy.visit('/');

      cy.get('.container-items .sc-fbJfA').eq(1).invoke('text').then((text) => {
        return text;
     });
});

Cypress.Commands.add('toastMessage', message => {
    cy.get('.Toastify__toast-body')
        .should('be.visible')
        .and('contain', message);
});

Cypress.Commands.add('addToCart', (position) => {
    cy.get('.container-items button').eq(position).click();
});

Cypress.Commands.add('removeToCart', (position) => {
    cy.get('.container-items button').eq(position).click();
});