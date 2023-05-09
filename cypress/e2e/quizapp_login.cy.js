describe('Logging-in with Google', function () {
    it('Ulterior logins with an authorized account', function () {
    cy.visit('https://gmail.com')
    cy.get('#identifierId').click().type("cristian.popa@qubiz.com")
    cy.contains('span', 'Next').click()
    cy.get('input[name="Passwd"]', {timeout: 10000}).click().type("blabla")
    cy.contains('span', 'Next').click()
    })
})