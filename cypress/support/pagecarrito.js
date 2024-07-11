class PageCarrito {
      
    ItemCarrito (){
        return cy.get('.item > .product-item-details > .product-item-name > a')
    }

}

export default PageCarrito