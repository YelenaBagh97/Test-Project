let email = "lenaaccount@mailinator.com"
let pass = "12345679"
let newPass = "12345678"

beforeEach(() => {
    cy.visit("/");
    cy.clickLoginBtn();
    cy.fillInEmail(email);
    cy.fillInPassword(pass);
    cy.clickSubmitBtn();
})

it('should successfully reset password', () => {
    cy.clickOnNavBar();
    cy.clickOnSettingsBtn();
    cy.getPasswordField().first().type(pass);
    cy.getPasswordField().eq(1).type(newPass);
    cy.confirmPassword(newPass);
    cy.clickSubmitBtn();
    cy.getPasswordChangeTxt().should('contain', 'Password successfully changed')

});

afterEach(() => {
    cy.clickOnNavBar();
    cy.clickLogoutBtn();
})