describe('web-spotify-shared-view', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=songrowcomponent--primary&knob-track&knob-columns',
    ),
  );

  it('should render the component', () => {
    cy.get('[artur-ba-song-row]').should('exist');
  });
});
