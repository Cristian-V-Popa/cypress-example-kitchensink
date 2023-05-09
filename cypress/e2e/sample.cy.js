describe('Selecting a specific Quiz', function () {
    it('Selecting an individual Quiz from Home page list of Quizzes', function () {
    cy.visit('http://localhost')
    cy.get('#google-login-container button').click()
    cy.get('#6287a0e97227bd005adc37bf', { timeout: 8000 }).should('be.visible').click()
    cy.get('#6287a0e97227bd005adc37c0').click()
    cy.get('#6287a0e97227bd005adc37c1').click()
    cy.get('#6287a0e97227bd005adc37c2').click()
    cy.get('#6287a0e97227bd005adc37c3').click()
    })
})