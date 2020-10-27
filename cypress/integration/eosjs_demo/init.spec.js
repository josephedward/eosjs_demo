/* eslint-disable no-undef */

describe("Basic Initialization Test", () => {

  it("Visits the heroku url", () => {
    cy.visit("https://eosjs-chain-nav.herokuapp.com/");
    cy.wait(500)
  })

it('Makes sure all the core DOM elements are present', ()=>{
    cy.get('h4').contains('RPC-API-URL endpoint').should('exist')
    cy.wait(500)
    cy.get('[style="margin-left: 10%;"] > .c0141 > .c0115 > .c0116 > .c0117 > .c0152 > .c0154 > .c0142').contains('Block Explorer').should('exist')
    cy.wait(500)
    cy.get(':nth-child(3) > .c0141 > .c0115 > .c0116 > .c0117 > .c0152 > .c0154 > .c0142').contains('Search ABI').should('exist')
    cy.wait(500)
    cy.get('.right').contains('Chain Height ').should('exist')
    cy.wait(500)
    cy.get('.c01109 > .c0116 > .c0117 > .c01117 > div > table > tbody > tr > td').should('exist')
    cy.wait(500)
    cy.get(':nth-child(1) > .c0141 > .c0115 > .c0116 > .c0117 > .c0152 > .c0154 > .c0142').contains('Get Latest Ten Blocks').should('exist')
    cy.wait(500)
    // cy.get('.c01242 > .c0116').contains('BLOCK ID:').should('exist')
    cy.get('.c01242 > .c0116 > .c0117 > .c01250 > h3').invoke('text').should('exist')

  });





});
