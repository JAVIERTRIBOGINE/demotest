describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://example.cypress.io')
    cy.visit('http://localhost:4200');
    cy.get("#login-input-name").type("XavierTribo");
    cy.get("#login-input-mail").type("jtribo@hotmail.com");
    cy.get("#login-submit").click();
    cy.url().should("include", "/heroes/read");
  })
})
