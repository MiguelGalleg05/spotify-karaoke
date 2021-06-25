describe('web-spotify-shared-view', () => {
  beforeEach(() => cy.visit('/iframe.html?id=usermenucomponent--primary'));

  it('should render the component', () => {
    cy.get('artur-ba-user-menu').should('exist');
  });
});
