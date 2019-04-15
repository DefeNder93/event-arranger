describe('Testing the hero list page', function() {

  it('should have a title', function() {
    cy.visit('http://localhost:4201');
    cy.contains('Event Arranger');
  });

  it('should use a menu', function() {
    cy.visit('http://localhost:4201');
    cy.get('[routerlink="user/add"]').click({ position: 'center' });
    cy.contains('Reset');
  })

});
