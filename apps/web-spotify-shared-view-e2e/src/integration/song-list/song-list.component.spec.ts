describe('web-spotify-shared-view', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=songlistcomponent--primary&knob-title&knob-header=true&knob-columns&knob-tracksUri&knob-tracks'
    )
  );

  it('should render the component', () => {
    cy.get('artur-ba-song-list').should('exist');
  });
});
