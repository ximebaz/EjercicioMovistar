class PagePrincipal{

       BotonMasProd (){
        return cy.get ('#moreProductsBtn')
       }
    
       elegirEquipoA14(){
            return cy.get('#product-item-info_14932')
        }

        
         EmpezarAFiltrar(){
            return cy.get('.block-subtitle')
        }

        FiltroPrecio250k_500k(){
            return cy.get('[data-value="250000_500000"] > a')
        }

        FiltroMemoriaInt128GB(){
            return cy.get('[data-value="802"] > a')
        }
        
        TotalDeProducMostrados (){
            return cy.get('.total-products > p')
        }

        ElegirProd(){
            return cy.get('.product-item')
        }

       ElegirEquipoA05 (){
        return cy.get('ol > [data-id="17629"]')
       }
       
       BotonCarrito (){
        return cy.get('.showcart')
       }
       


}

export default PagePrincipal