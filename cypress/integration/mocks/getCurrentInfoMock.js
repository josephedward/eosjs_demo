/* eslint-disable no-undef */


export const getCurrentInfoMock = (response) =>{
    let endpoint = '/api/currentinfo'
    cy.route({
        method:'GET',
        url:`${endpoint}`,
        response
    }).as('getCurrentInfoMock')
}

