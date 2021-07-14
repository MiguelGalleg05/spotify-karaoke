describe('web-spotify-shared-view', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=cartcomponent--primary&knob-image&knob-title&knob-subtitle',
    ),
  );

  it('should render the component', () => {
    cy.get('artur-ba-cart').should('exist');
  });
});
