import React from "react";
import { mount } from "cypress-react-unit-test";
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
  });

  // it('tests the timed get_info call to the RPC', () =>{
  //     let lastBlock={}
  // setInterval(() => {
  // }
  // , 500)
  // })



  it("checks the getTenLatestBlocks button", () => {
    cy.contains("Get Latest Ten Blocks").should("exist");
    cy.wait(500);
    cy.contains("Get Latest Ten Blocks").click();
      

});



  it("checks the currentInfo hover event", () => {
    cy.contains("EOS CHAIN NAVIGATOR").should('exist');
    cy.wait(500);  
    cy.contains("EOS CHAIN NAVIGATOR").trigger("mouseover");
    cy.get('table').contains('server_version').should('exist')
});





});
