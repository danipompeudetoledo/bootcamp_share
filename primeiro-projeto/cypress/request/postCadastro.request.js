<reference types="cypress"/>

const cypress = require("cypress");
const payloadCadastro = require("../payload/cadastro.payload.json");

function cadastro(){
    return cypress.request({
        method: 'POST' ,
        url: `${Cypress.env("apiURL")}/ongs`,
        body:payloadCadastro
    });
}

export {cadastro}