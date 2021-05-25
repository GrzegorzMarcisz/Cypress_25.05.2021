describe('Cypress training', () => {

  beforeEach(()=>{
    cy.visit('/')
  })


  it('1st test', () => {

    cy.get('h1').should('have.text', 'Cypress  training site')
    cy.get('#value').should('be.visible')
    cy.get('.dont_click').should('be.visible')
  })

  it('2st test', () => {

    cy.get('.dont_click').click()
    cy.get('h2').contains('ERROR!').should('be.visible')
  })

  it('2st test', () => {

    cy.get('#value').type('123')
    cy.get('#click').click()
    cy.get('#result').should('have.text', '123')
  })

})
