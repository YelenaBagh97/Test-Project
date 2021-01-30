Cypress.Commands.add('clickRegistrationBtn', () => {
    cy.get('[class="top-right links"] a').last().click();
});

Cypress.Commands.add('clickLoginBtn', () => {
    cy.get('[class="top-right links"] a').first().click();
});

Cypress.Commands.add('fillInName', (name) => {
    cy.get('#name').type(name);
});

Cypress.Commands.add('fillInEmail', (email) => {
    cy.get('#email').type(email);
});

Cypress.Commands.add('getPasswordField', () => {
    cy.get('[name*="password"]');
});

Cypress.Commands.add('fillInPassword', (pass) => {
    cy.getPasswordField().type(pass);
});

Cypress.Commands.add('confirmPassword', (pass) => {
    cy.get('#password-confirm').type(pass);
});

Cypress.Commands.add('clickSubmitBtn', () => {
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('getCardHeaderTxt', () => {
    cy.get('.card-header');
});

Cypress.Commands.add('getCardBodyTxt', () => {
    cy.get('.card-body');
});

Cypress.Commands.add('clickOnNavBar', () => {
    cy.get('#navbarDropdown').click();
});

Cypress.Commands.add('clickOnSettingsBtn', () => {
    cy.get('.dropdown-menu a').first().click();
});

Cypress.Commands.add('getPasswordChangeTxt', () => {
    cy.get('.alert')
});

Cypress.Commands.add('clickLogoutBtn', () => {
    cy.get('.dropdown-menu a').last().click();

});