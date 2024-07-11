class PageProducto{


ObtenerCuotas(){
    return cy.get('.price-content > .financing')}


    AnuncioCuotas(){
        return cy.get('#open-installments-modal')
    }

    EscribirBanco (){
        return cy.get('#inputbank')
    }

    SelecBanco (){
        return cy.get('#bankSelector')}

    EscribirTarj (){
        return cy.get('#inputCard')
}

    SelecTarj (){
        return cy.get('#cardSelector')
    }

    BotonCalcCuot(){
        return cy.get('#calculate_btn > .btn-primary')
    }

    TablaCuotas (){
        return cy.get('#installmentsTable')
    }
    
    BotonComprar (){
        return cy.get('#swatch_attribute_card')
    }
    
    MensjExitoCarrito (){
        return cy.get('.message')
    }
        
    NroProductCarrito (){
        return cy.get('.counter-number')
    }

    BotonCarrito (){
        return cy.get('.showcart')
       }


}

export default PageProducto