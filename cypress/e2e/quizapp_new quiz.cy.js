describe('Adding a new quiz', function () {
    it('Using the "New Quiz" button', function () {
    cy.visit('http://localhost')
    cy.get('#google-login-container button').click()
    cy.get('#new-quiz-btn', { timeout: 8000 }).should('be.visible').click()
    })
})