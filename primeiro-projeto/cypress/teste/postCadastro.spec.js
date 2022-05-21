<reference types="cypress"/>

import { property } from "cypress/types/lodash";
import * as Cadastro from "../request/postCadastro.request";

describe("Teste Cadastro Api"), () => {
    it("Post: efetuar cadastro com sucesso",() => {
        Cadastro.cadastro().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.status).has.property(200);
            expect(response.body.id).not .null;


        })


        
        
    })
    
}
