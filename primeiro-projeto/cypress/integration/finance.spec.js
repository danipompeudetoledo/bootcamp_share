import cypress from "cypress";

<Reference types="cypress"/>
context('Dev.Finances', () => {
    it('cadastrar entradas',() => {
        // entender fluxo manualmente
        // mapear elementos que vamos interagir
        //descrever as interações com cypress 
        //Adicionar as aserções que precisamos
        // Cadastro de entradas


        //clas 
        // estou pedindo para o teste startar o botão cadastrar
        cy.get("float.button").click();

        //atributo
        //cy.get("Loc.Home.campoDescription").type("this.home.description")

        //cy.get('["name=amount"]');
        //cy.get("date");

        //cy.get('["type=submit"]');
        //cy.get('button').contains('salvar')

        //class
        //cy.get(".button cancel");

        cy.get('#transaction .button');
        cy.get('#input description');
        cy.get('[name=amount]');
        cy.get('[type=date]');
        cy.get('button').contains('Salvar');
        cy.get('button').contains('Cancel')

        cy.intercept('post', '**/test/finance').as('getTest')
        
        cy.visit('venturus/Dev.Finances/index.html')
        

        

    })
    // cadastro de saidas
    //remover entradas e saídas
});





