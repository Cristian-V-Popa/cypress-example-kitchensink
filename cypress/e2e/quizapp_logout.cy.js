describe('Logging-out', function () {
    it('Using the Logout button', function () {
    cy.visit('http://localhost')
    cy.get('#google-login-container button').click()
    cy.get('#current-user-button', { timeout: 8000 }).should('be.visible').click()
    cy.get('#logout-menu-item', { timeout: 3000 }).should('be.visible').click()
    })
})