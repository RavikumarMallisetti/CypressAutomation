describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://scylla.qa.devel.drbsystems.com/')
    cy.get('#email').type('AUTOMATION1_QA_PowerUser@scylla.com')
    cy.get('#password').type('Test$123')
    cy.get('#btn-login').click()
  })
})