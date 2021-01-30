let name = "Test Account"
let email = "account@mailinator.com"
let pass = "12345678"

beforeEach(() => {
    cy.visit("/");
})

it('should successfully register', function () {
    cy.clickRegistrationBtn();
    cy.fillInName(name);
    cy.fillInEmail(email);
    cy.fillInPassword(pass);
    cy.confirmPassword(pass);
    cy.clickSubmitBtn();
    cy.getCardHeaderTxt().should('contain', 'Verify Your Email Address')
    cy.getCardBodyTxt().should('contain', 'Before proceeding, please check your email for a verification link.')
});
