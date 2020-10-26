/* eslint-disable no-undef */
import * as currentInfoMock from "../mocks/getCurrentInfoMock";

describe("Pulls mock chain information for get_info call", () => {
//   beforeEach(() => {
//     cy.server();
//     cy.fixture("../fixtures/get_info.json").then((rc) => {
//       currentInfoMock.getCurrentInfoMock(rc.getCurrentInfoData);
//     });


//     // load heroku page, or localhost? 
//     // cy.visit("/");
//     cy.visit('localhost:3000/api/currentinfo')
//     cy.wait("@getCurrentInfoMock");
//   });

  it('should display current blockchain info with the mock data specified',()=>{
    cy.server()
    cy.fixture('get_info.json').as('currentInfoJSON')
    cy.route('GET', 'currentInfo/*', '@currentInfoJSON')
    // expect(cy.get('.c01109 > .c0116 > .c0117 > .c01117 > div > table > tbody > tr > td').to.not.be.undefined)
  })

});
