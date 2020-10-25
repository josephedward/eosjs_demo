/* eslint-disable no-undef */

/// <reference types="cypress" />
// import React from 'react'
// import { mount } from 'cypress-react-unit-test'

// describe('Invoke callback', () => {
//   function Button({ action }) {
//     return <button onClick={() => action()}>Call</button>
//   }

//   it('callback is called on button click', () => {
//     const callback = cy.stub()
//     mount(<Button action={callback} />)

//     cy.contains('button', /call/i)
//       .click()
//       .then(() => {
//         expect(callback).to.have.been.calledOnce
//         expect(callback).to.have.been.calledWithExactly()
//       })
//   })
// })



describe("Tests Core Functionality -> Getting Ten Most Recent Blocks ", () => {
  it("visits the heroku url", () => {
    cy.visit("https://eosjs-chain-nav.herokuapp.com/");
  });

  it("checks the getTenLatestBlocks button", () => {
    cy.contains("Block Explorer").should("exist");
    cy.wait(500);
    cy.contains("Block Explorer").click();
    // mount(<GrabTen/>)
    cy.wait(500);
    cy.contains("Get Latest Ten Blocks").should("exist");
    cy.wait(500);
    cy.contains("Get Latest Ten Blocks").click();
    cy.wait(500);
    cy.contains("Show Transactions").should("exist");
    cy.wait(500);
    cy.contains("Show Transactions").click();
    cy.wait(500);
    cy.get('ul').within((list)=>{
        cy.get('ul').should('exist')
        cy.wait(500);
        cy.get('ul').contains("▶").click()
    })

    // let ref1 = cy.get("ul").get("li").get("div").get("div").contains("▶");
    // ref1.each((test)=>{
    //     console.log(test)
    // })
    // ref1.should("exist");
    // cy.wait(500);
    // ref1.get("label").get("span").contains("root").should('exist')
    // cy.wait(500);
    // ref1.get("label").get('ul').should('exist')
    // cy.wait(500);
    // ref1.get("label").get('ul').get("li").get("div").get("div").contains("▶").each((test)=>{
    //         console.log(test)
    //     })
  });
});
