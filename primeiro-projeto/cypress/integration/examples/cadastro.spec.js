<reference types="cypress"/>
// esse é o teste de cadastro
import cypress from "cypress";
import { contains } from "cypress/types/jquery";
import { property } from "cypress/types/lodash";
import { beforeEach } from "mocha";
import loc from "../../support/locators";

it("Teste Cadastro" ,() =>{
    beforeEach(() => {
        cy.visit("/register");
    });


    cy.fixture("usuarioData") 
    .as("usuario")
    .then(function (){
        cy.get(loc.CADASTRO.campoNome).type(nome);
        cy.get(loc.CADASTRO.campoEmail).type(this.usuario.Email);
        cy.get(loc.CADASTRO.campoUF).type(this.usuario.uf);
        cy.get(loc.CADASTRO.campoCidade).type(this.usuario.city);
        cy.get(loc.CADASTRO.campoWhatsApp).type(this.usuario.whatsapp);


        cy.intercept("post","/ongs").as("createUser");
        cy.contains("Cadastrar").click()=false

        cy.wait("@createUser").then(({ request, response})=>{
            expect(request.body.name).to.eq(nome);
            expect(request.body.email).to.eq(this.usuario.email);
            expect(request.body.uf).to.eq (this.usuario.uf);
            expect(request.body.city).to.eq (this.usuario.city);
            expect(request.body.whatsapp).to.eq (this.usuario.whatsapp);

            expect(response.statusCode).to.eq(200);
            expect(response.body).has.property("id")
            expect(response.body.id).not .null

        })

    });


})




