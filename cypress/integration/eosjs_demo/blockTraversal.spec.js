/* eslint-disable no-undef */

describe("Tests Core Functionality via Traversal-> Getting Ten Most Recent Blocks ", () => {
  it("visits the heroku url", () => {
    cy.visit("https://eosjs-chain-nav.herokuapp.com/");
  });

  it("checks the getTenLatestBlocks button", () => {
    cy.contains("Block Explorer").should("exist");
    cy.wait(500);
    cy.contains("Block Explorer").click();
    cy.wait(500);
    cy.contains("Get Latest Ten Blocks").should("exist");
    cy.wait(500);
    cy.contains("Get Latest Ten Blocks").click();
    cy.wait(500);
    cy.contains("Show Transactions").should("exist");
    cy.wait(500);
    cy.contains("Show Transactions").click();
    let root = cy
      .get("ul")
      .get("li")
      .get("div")
      .get("div")
      .contains("▶")
      .get("label")
      .get("span")
      .contains("root");
    root.should("exist");
    root.get("ul").within((list) => {
      cy.get("ul").should("exist");
      cy.get("ul").contains("▶").click();
      let trx = cy
        .get("ul")
        .get("li")
        .get("div")
        .get("div")
        .contains("▶")
        .get("label")
        .get("span")
        .contains("trx");

      trx.should("exist");
      root.get("ul").within((list) => {
        if (cy.get("ul").contains("▶").should("exist")) {
          cy.get("ul").contains("▶").click();

          let sig = cy
            .get("ul")
            .get("li")
            .get("div")
            .get("div")
            .contains("▶")
            .get("label")
            .get("span")
            .contains("signatures");
          sig.should("exist");

          let transaction = cy
            .get("ul")
            .get("li")
            .get("div")
            .get("div")
            .contains("▶")
            .get("label")
            .get("span")
            .contains("transaction");
          transaction.should("exist");
          transaction.parent().prev("div")?.contains("▶")?.click();
          transaction
            .parent()
            .parent()
            .within((list) => {
              cy.get("ul").contains("▶").click();
              cy.get("ul")
                .contains("▶")
                .parent()
                .next("label")
                .contains("action")
                .should("exist");
            });
        }
      });
    });
  });
});
