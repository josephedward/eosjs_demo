/* eslint-disable no-undef */
import React from "react";
import { mount } from "cypress-react-unit-test";
import ReactTestUtils from "react-dom/test-utils"; // ES6
import {GrabTen} from "../../../src/components/GrabTen"

// import '@testing-library/cypress/add-commands'

// import {Button} from 'arwes'
// import { ErrorBoundary } from '../../../src/components/ErrorBoundary'
// Cypress.on('uncaught:exception', (err, runnable) => {
//   return false
// })

// /* eslint-env mocha */
// describe('Error Boundary', () => {
//   const errorMessage = 'I crashed!'
//   const ChildWithoutError = () => <h1>Normal Child</h1>
//   const ChildWithError = () => {
//     throw new Error(errorMessage)
//     return null
//   }

//   it('renders normal children', () => {
//     mount(
//       <ErrorBoundary>
//         <ChildWithoutError />
//       </ErrorBoundary>,
//     )
//     cy.get('h1').should('have.text', 'Normal Child')
//     cy.get(ErrorBoundary)
//       .its('state.error')
//       .should('not.exist')
//   })

//   it('on error, display fallback UI', () => {
//     try {
//       mount(
//         <ErrorBoundary name="ChildWithError">
//           <ChildWithError />
//         </ErrorBoundary>,
//       )
//     } catch (e) {
//       // do nothing
//     }

//     cy.get('header h1').should('contain', 'Something went wrong.')
//     cy.get('header h3').should('contain', 'ChildWithError failed to load')
//   })
// })

describe("Basic L1 Initialization Test", () => {

  it("visits the heroku url", () => {
    cy.visit("https://eosjs-chain-nav.herokuapp.com/");
    cy.get('h4').contains('RPC-API-URL endpoint').should('exist')
    cy.get('[style="margin-left: 10%;"] > .c0141 > .c0115 > .c0116 > .c0117 > .c0152 > .c0154 > .c0142').contains('Block Explorer').should('exist')
    cy.get(':nth-child(3) > .c0141 > .c0115 > .c0116 > .c0117 > .c0152 > .c0154 > .c0142').contains('Search ABI').should('exist')
    cy.get('.right').contains('Chain Height ').should('exist')
    cy.get('.c01109 > .c0116 > .c0117 > .c01117 > div > table > tbody > tr > td').should('exist')
    cy.get(':nth-child(1) > .c0141 > .c0115 > .c0116 > .c0117 > .c0152 > .c0154 > .c0142').contains('Get Latest Ten Blocks').should('exist')
    cy.wait(500)
    cy.get('.c01242 > .c0116').contains('BLOCK ID:').should('exist')
  });





});
