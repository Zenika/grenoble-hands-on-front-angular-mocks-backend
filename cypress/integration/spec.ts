describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Welcome');
    cy.contains('grenoble-hands-on-front-angular-mocks-backend app is running!');
  })
})
