/* eslint-disable no-undef */

describe("passes mock data as get_abi call for single account name", () => {
  it("Visits the heroku url", () => {
    cy.visit("https://eosjs-chain-nav.herokuapp.com/test");
    cy.wait(500);
  });

  it("mocks ABI information", () => {
    cy.fixture("get_abi").then((abiInfo) => {
      console.log("abiInfo : ", abiInfo);

      cy.contains("Search ABI").click();
      cy.wait(500);
      cy.contains("Search Account").click();
      cy.contains(abiInfo.account_name).should("exist");
      cy.get(':nth-child(2) > [style="padding-left: 0.5em; cursor: default; color: rgb(166, 226, 46);"] > :nth-child(1)')
      .should('contain.text',abiInfo.abi.types.length)
      cy.get(':nth-child(3) > [style="padding-left: 0.5em; cursor: default; color: rgb(166, 226, 46);"] > :nth-child(1)')
      .should('contain.text',abiInfo.abi.structs.length)
      cy.get(':nth-child(4) > [style="padding-left: 0.5em; cursor: default; color: rgb(166, 226, 46);"] > :nth-child(1)')
      .should('contain.text',abiInfo.abi.actions.length)
      cy.get(':nth-child(5) > [style="padding-left: 0.5em; cursor: default; color: rgb(166, 226, 46);"] > :nth-child(1)')
      .should('contain.text',abiInfo.abi.tables.length)
      // ricardian_clauses
      cy.get(':nth-child(6) > [style="padding-left: 0.5em; cursor: default; color: rgb(166, 226, 46);"] > :nth-child(1)')
      .should('contain.text',abiInfo.abi.ricardian_clauses.length)
        
    
   });
  });
});
