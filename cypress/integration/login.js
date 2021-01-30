let name = "Test Account"
let email = "lenaaccount@mailinator.com"
let pass = "12345679"

beforeEach(() => {
    cy.visit("/");
})

it('should successfully login', () => {
    cy.clickLoginBtn();
    cy.fillInEmail(email);
    cy.fillInPassword(pass);
    cy.clickSubmitBtn();
    cy.getCardHeaderTxt().should('contain', 'Dashboard')
    cy.getCardBodyTxt().should('contain', 'You are logged in!')
})