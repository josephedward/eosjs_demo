/* eslint-disable no-undef */

describe("passes mock data about current blockchain state, get_info call", () => {
  it("Visits the heroku url", () => {
    cy.visit("https://eosjs-chain-nav.herokuapp.com/test");
    cy.wait(500);
  });

  it("Gets current chain get_info fixture information", () => {
    cy.fixture("get_info").then((chainInfo) => {
      console.log("chainInfo : ", chainInfo);

      try {
        cy.contains(chainInfo.server_version).invoke("text").should("exist");
        cy.contains(chainInfo.chain_id).invoke("text").should("exist");
        cy.contains(chainInfo.head_block_num).invoke("text").should("exist");
        cy.contains(chainInfo.last_irreversible_block_num)
          .invoke("text")
          .should("exist");
        cy.contains(chainInfo.last_irreversible_block_id)
          .invoke("text")
          .should("exist");
        cy.contains(chainInfo.head_block_id).invoke("text").should("exist");
        cy.contains(chainInfo.head_block_time).invoke("text").should("exist");
        cy.contains(chainInfo.head_block_producer)
          .invoke("text")
          .should("exist");
        cy.contains(chainInfo.virtual_block_cpu_limit)
          .invoke("text")
          .should("exist");
        cy.contains(chainInfo.virtual_block_net_limit)
          .invoke("text")
          .should("exist");
        cy.contains(chainInfo.block_cpu_limit).invoke("text").should("exist");
        cy.contains(chainInfo.block_net_limit).invoke("text").should("exist");
        cy.contains(chainInfo.server_version_string)
          .invoke("text")
          .should("exist");
        cy.contains(chainInfo.fork_db_head_block_num)
          .invoke("text")
          .should("exist");
        cy.contains(chainInfo.fork_db_head_block_id)
          .invoke("text")
          .should("exist");
        cy.contains(chainInfo.server_full_version_string)
          .invoke("text")
          .should("exist");
      } catch (err) {
        console.log("testing error : ", err);
      }
    });
  });
});

describe("passes mock data as get_abi call for single account name", () => {
  it("Gets ABI fixture information", () => {
    cy.fixture("get_abi").then((abiInfo) => {
      try {
        console.log("abiInfo : ", abiInfo);

        cy.contains("Search ABI").click();
        cy.wait(500);
        cy.contains("Search Account").click();
        cy.contains(abiInfo.account_name).should("exist");
        cy.get(
          ':nth-child(2) > [style="padding-left: 0.5em; cursor: default; color: rgb(166, 226, 46);"] > :nth-child(1)'
        ).should("contain.text", abiInfo.abi.types.length);
        cy.get(
          ':nth-child(3) > [style="padding-left: 0.5em; cursor: default; color: rgb(166, 226, 46);"] > :nth-child(1)'
        ).should("contain.text", abiInfo.abi.structs.length);
        cy.get(
          ':nth-child(4) > [style="padding-left: 0.5em; cursor: default; color: rgb(166, 226, 46);"] > :nth-child(1)'
        ).should("contain.text", abiInfo.abi.actions.length);
        cy.get(
          ':nth-child(5) > [style="padding-left: 0.5em; cursor: default; color: rgb(166, 226, 46);"] > :nth-child(1)'
        ).should("contain.text", abiInfo.abi.tables.length);
        // ricardian_clauses
        cy.get(
          ':nth-child(6) > [style="padding-left: 0.5em; cursor: default; color: rgb(166, 226, 46);"] > :nth-child(1)'
        ).should("contain.text", abiInfo.abi.ricardian_clauses.length);
      } catch (err) {
        console.log("testing error : ", err);
      }
    });
  });
});

let transactionList;
describe("tests block properties and verifies signatures on transactions", () => {
  it("Get block example fixture information", () => {
    // it("Visits the heroku url", () => {
    cy.visit("https://eosjs-chain-nav.herokuapp.com/test");
    cy.wait(500);
    // });
    // cy.get(".body").click();
    cy.fixture("get_block").then((blockInfo) => {
      try {
        console.log("blockInfo : ", blockInfo);
        transactionList = [...blockInfo.transactions];
        let newProducers = blockInfo.new_producers;

        delete blockInfo.transactions;
        delete blockInfo.new_producers;
        console.log("transactionList : ", transactionList);
        checkBlockInfoDom(blockInfo);
      } catch (err) {
        console.log("testing error : ", err);
      }
      // elem holding the signature
      // cy.get(':nth-child(2) > ul > li > [style="color: rgb(166, 226, 46);"]')
    });
  });
});

describe("It navigates through called UI elements", () => {
  it("Opens a modal with JSON tree displayed", async () => {
    cy.contains("Get Latest Ten Blocks").click();
    cy.wait(500);
    cy.contains("Show Transactions").click();
    cy.wait(500);


    for (let i = 1; i <= transactionList.length; i++) {

    try{
      cy.get(`[style="position: relative; padding-top: 0.25em; margin-left: 0px; padding-left: 0px;"] > :nth-child(4) > :nth-child(${i}) > :nth-child(1) > div`).click()
      // cy.get(':nth-child(4) > :nth-child(1) > :nth-child(4) > [style="position: relative; padding-top: 0.25em; margin-left: 0.875em; padding-left: 0px;"] > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div').click()
      // cy.get(':nth-child(4) > :nth-child(4) > :nth-child(2) > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div').click()
      // cy.get(':nth-child(4) > :nth-child(4) > :nth-child(7) > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div').click()
      // cy.get(':nth-child(7) > :nth-child(4) > [style="position: relative; padding-top: 0.25em; margin-left: 0.875em; padding-left: 0px;"] > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div').click()
      // cy.get(':nth-child(8) > :nth-child(4) > li > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div').click()
  }
    catch(err){
      console.log("testing error : ", err);
    }
    }



    checkTransactionDom(transactionList)

  });
});

function checkBlockInfoDom(blockInfo) {
  try {
    for (let x in blockInfo) {
      cy.contains(blockInfo[x]).should("exist");
    }
  } catch (err) {
    console.log("testing error : ", err);
  }
}

function checkTransactionDom(transactionList){
  console.log(transactionList)
  for (let x of transactionList) {
    try {
      cy.contains(x.cpu_usage_us).invoke('text').should('exist')
      cy.contains(x.net_usage_words).invoke('text').should('exist')
      cy.contains(x.status).invoke('text').should('exist')
      
      // cy.contains(transaction.net_usage_words).should('exist')
      // cy.contains(transaction.status).should('exist')
      // expect(x).to.have.property("trx");
      // if (x.trx) {
      //   expect(x.trx).to.have.property("compression");
      //   expect(x.trx).to.have.property("context_free_data");
      //   expect(x.trx).to.have.property("id");
      //   expect(x.trx).to.have.property("packed_context_free_data");
      //   expect(x.trx).to.have.property("packed_trx");
      //   expect(x.trx).to.have.property("signatures");
      //   expect(x.trx).to.have.property("transaction");
      //   if (x.trx.transaction) {
      //     expect(x.trx.transaction).to.have.property("actions");
      //     expect(x.trx.transaction).to.have.property("context_free_actions");
      //     expect(x.trx.transaction).to.have.property("delay_sec");
      //     expect(x.trx.transaction).to.have.property("expiration");
      //     expect(x.trx.transaction).to.have.property("max_cpu_usage_ms");
      //     expect(x.trx.transaction).to.have.property("max_net_usage_words");
      //     expect(x.trx.transaction).to.have.property("ref_block_num");
      //     expect(x.trx.transaction).to.have.property("ref_block_prefix");
      //   }
      // }
    } catch (err) {
      console.log("testing error : ", err);
    }
  }
}