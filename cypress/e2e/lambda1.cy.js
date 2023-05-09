/// <reference types="cypress" />

describe('Simple Form Test', () => {
  beforeEach(() => {
    cy.setCookie('exit_popup_dismissed', 'closed');
    cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo');
  });

  it('Tests the Single Input Field', () => {
    const text = 'Hello';
    cy.get('input#user-message').type('Hello')
      .get('button#showInput').click()
      .get('p#message').should('have.text', text);
  })

  it('Tests the Double Input Field', () => {
    const A = 10;
    const B = 5;
    const sum = A + B
    cy.get('input#sum1').type(A)
      .get('input#sum2').type(B)
      .get('#gettotal > button').click()
      .get('p#addmessage').should('have.text', sum)
  })
})