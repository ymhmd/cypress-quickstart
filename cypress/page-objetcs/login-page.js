const ObjectIdentifiers = require("../common/resources/objects");
const TestData = require("../common/resources/testData");

const email = TestData.email;
const password = TestData.password;

export function navigate() {
    cy.visit(TestData.githubLoginPageUrl);
}

export function login() {
    cy.get(ObjectIdentifiers.GithubLoginPage.usernameFieldId).type(email);
    cy.get(ObjectIdentifiers.GithubLoginPage.passwordFieldId).type(password);
    cy.get(ObjectIdentifiers.GithubLoginPage.signinButtonXpath).click();
}
