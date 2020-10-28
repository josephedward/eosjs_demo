/* eslint-disable no-undef */

let accountNameVal;

describe("Tests Core Functionality, Getting Ten Most Recent Blocks, Searching Account for ABI Information", () => {
  it("visits the heroku url", () => {
    cy.visit("https://eosjs-chain-nav.herokuapp.com/");
  });

  it("Grabs First Account Name from First Action of First Transaction of FirstBlock", () => {
    cy.wait(500);
    cy.get(
      ":nth-child(1) > .c0141 > .c0115 > .c0116 > .c0117 > .c0152 > .c0154 > .c0142"
    ).click({ force: true });
    cy.wait(500);
    cy.get(
      ".c01251 > .c0116 > .c0117 > .c01250 > :nth-child(17) > div > .ui"
    ).click();
    cy.wait(500);
    cy.get(
      ':nth-child(4) > :nth-child(1) > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div'
    ).click();
    cy.wait(500);
    if (
      cy.get(
        ':nth-child(4) > :nth-child(1) > :nth-child(4) > [style="position: relative; padding-top: 0.25em; margin-left: 0.875em; padding-left: 0px;"] > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div'
      )
    ) {
      cy.get(
        ':nth-child(4) > :nth-child(1) > :nth-child(4) > [style="position: relative; padding-top: 0.25em; margin-left: 0.875em; padding-left: 0px;"] > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div'
      ).click();
    }
    if (
      cy.get(
        ':nth-child(4) > :nth-child(4) > :nth-child(7) > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div'
      )
    ) {
      cy.get(
        ':nth-child(4) > :nth-child(4) > :nth-child(7) > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div'
      ).click();
    }
    if (
      cy.get(
        ":nth-child(7) > :nth-child(4) > :nth-child(8) > :nth-child(1) > div"
      )
    ) {
      cy.get(
        ":nth-child(7) > :nth-child(4) > :nth-child(8) > :nth-child(1) > div"
      ).click();
      cy.get(
        ':nth-child(8) > :nth-child(4) > :nth-child(1) > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div'
      ).click();
      cy.get(
        ':nth-child(8) > :nth-child(4) > :nth-child(1) > :nth-child(4) > :nth-child(1) > [style="color: rgb(166, 226, 46);"]'
      )
        .invoke("text")
        .as("accountNameVal");
      cy.get("@accountNameVal").then((account) => {
        cy.log(account);
      });
    }
    cy.get("@accountNameVal").then((account) => {
      accountNameVal = account;
    });
    console.log(accountNameVal);
  });

  it("Uses the account value from the previous test as parameter in the get_abi call", () => {
    console.log(accountNameVal);
    cy.wait(500);
    cy.get(".page").click({ force: true });
    cy.wait(500);
    cy.get(
      ":nth-child(3) > .c0141 > .c0115 > .c0116 > .c0117 > .c0152 > .c0154 > .c0142"
    ).click();
    cy.wait(500);
    cy.get("input").type(accountNameVal.replace(/['"]+/g, ""));
    cy.get(
      ".container > .c0141 > .c0115 > .c0116 > .c0117 > .c0152 > .c0154 > .c0142"
    ).click();
    if (
      cy
        .get(
          ':nth-child(3) > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div'
        )
        .should("exist")
    ) {
      cy.get(
        ':nth-child(3) > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div'
      ).click();
    }
  });
});
