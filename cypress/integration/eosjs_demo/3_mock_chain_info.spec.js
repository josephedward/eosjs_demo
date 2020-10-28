/* eslint-disable no-undef */

describe("passes mock data about current blockchain state, get_info call", () => {
  it("Visits the heroku url", () => {
    cy.visit("https://eosjs-chain-nav.herokuapp.com/test");
    cy.wait(500);
  });


  it("mocks current chain information", () => {
    cy.fixture("get_info").then((chainInfo) => {
      console.log("chainInfo : ", chainInfo);
      // cy.get(".ArwesSounds\(Frame\)-root-0-1-91 > .ArwesSounds\(Frame\)-box-0-1-16 > .ArwesSounds\(Frame\)-children-0-1-17 > .Table-root-0-1-99 > div > table > tbody > tr > td")
      // // .invoke('text')
      cy.contains(chainInfo.server_version).invoke('text').should('exist');
      cy.contains(chainInfo.chain_id).invoke('text').should('exist');
      cy.contains(chainInfo.head_block_num).invoke('text').should('exist');
      cy.contains(chainInfo.last_irreversible_block_num).invoke('text').should('exist');
      cy.contains(chainInfo.last_irreversible_block_id).invoke('text').should('exist');
      cy.contains(chainInfo.head_block_id).invoke('text').should('exist');
      cy.contains(chainInfo.head_block_time).invoke('text').should('exist');
      cy.contains(chainInfo.head_block_producer).invoke('text').should('exist');
      cy.contains(chainInfo.virtual_block_cpu_limit).invoke('text').should('exist');
      cy.contains(chainInfo.virtual_block_net_limit).invoke('text').should('exist');
      cy.contains(chainInfo.block_cpu_limit).invoke('text').should('exist');
      cy.contains(chainInfo.block_net_limit).invoke('text').should('exist');
      cy.contains(chainInfo.server_version_string).invoke('text').should('exist');
      cy.contains(chainInfo.fork_db_head_block_num).invoke('text').should('exist');
      cy.contains(chainInfo.fork_db_head_block_id).invoke('text').should('exist');
      cy.contains(chainInfo.server_full_version_string).invoke('text').should('exist');
    });
  });



});
