/* eslint-disable no-undef */

describe("tests block properties and verifies signatures on transactions", () => {
    it("Visits the heroku url", () => {
        cy.visit("https://eosjs-chain-nav.herokuapp.com/test");
        cy.wait(500);
      });

    it("mocks most recent block information",  () => {
        cy.fixture("get_block").then((blockInfo) => {
        console.log("blockInfo : ", blockInfo);
        let transactionList = [...blockInfo.transactions]
        delete blockInfo.transactions;
        delete blockInfo.new_producers;
        console.log("transactionList : ",transactionList)
        for(let x in blockInfo)
        {
            cy.contains(blockInfo[x]).should('exist')
        }
    
        cy.contains('Get Latest Ten Blocks').click()
        cy.wait(500)
        cy.contains('Show Transactions').click()
        cy.wait(500)
        for(let i =2; i<transactionList.length;i++){
           
        cy.get(`:nth-child(${i}) > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div`).click({ multiple: true })
        cy.wait(500)
        cy.get(`:nth-child(${i}) > :nth-child(4) > [style="position: relative; padding-top: 0.25em; margin-left: 0.875em; padding-left: 0px;"] > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div`).click({ multiple: true })
        cy.wait(500)
        cy.get(':nth-child(4) > :nth-child(4) > :nth-child(2) > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div').click({ multiple: true })
        cy.contains(transactionList[i-1].trx.signatures[0]).invoke('text').should('exist')
        // close before next iteration of loop
        cy.get(':nth-child(4) > :nth-child(4) > :nth-child(2) > [style="display: inline-block; padding-right: 0.5em; padding-left: 0px; cursor: pointer;"] > div').click({ multiple: true })
      
    
    }
    
        // elem holding the signature
        // cy.get(':nth-child(2) > ul > li > [style="color: rgb(166, 226, 46);"]')
    
        
        });
      });
    
})