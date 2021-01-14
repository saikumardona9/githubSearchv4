describe ('second Test', () => {
  it ('accepts input', () => {
    cy.visit ('http://localhost:3000/');
    debugger;
    cy.focused().should('have.class', 'search-field');
    const input = 'n';
    cy.get('.search-field').type(input).should('have.value', input);
  });
});
