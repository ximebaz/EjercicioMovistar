import PagePrincipal from "../support/PagePrincipal";
import PageCarrito from "../support/pagecarrito";
import PageProducto from "../support/PageProducto";

describe ('Resolución Ejercicio Getronics', function (){
  var paginaPrincipal = new PagePrincipal()
  var producto = new PageProducto()
  var carrito = new PageCarrito()
  beforeEach (function(){
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught exception:', err.message)
    return false; });

    cy.visit ('https://tiendaonline.movistar.com.ar') //accedo a la web
    

})
    it('Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A14', function (){
      paginaPrincipal.BotonMasProd().click() // presiono el boton de más productos porque el celular que busco no esta entre las opciones que me salen en pantalla, podria haber usado los filtros pero eso lo uso en el segundo caso 
      paginaPrincipal.elegirEquipoA14().click() // hago click en el componente del celular selecionado, en este caso Samsung A14
      producto.ObtenerCuotas().should('contain','12 cuotas sin interés') //valido que en la pagina se muestre que se puede comprar en 12 cuotas
      // Como no se mostraban las 3 cuotas sin interés pero si 12 cuotas sin interés, asumo que cambió la  condición y validaré lo que se muestra en la web //
      cy.url().should('contain','samsung-galaxy-a14') // valido que dentro de la url está el nombre del equipo 

  })
    it('Aplicar filtro de equipos  -Memoria Interna.128GB -Precio Entre 200Ky300K', function (){
      paginaPrincipal.EmpezarAFiltrar().click() // presiono el boton de filtrar 
      paginaPrincipal.FiltroPrecio250k_500k().click() // selecciono el primer filtro (en el ejercicio el rango de precio era de entre 200k y 300k, sin embargo no está la opcion, asi que tomaré la condicion mas similar que es la de entre 250k y 500k)
      paginaPrincipal.EmpezarAFiltrar().click() // vuelvo a presionar el boton de filtrar ya que no se pueden seleccionar varios filtros en simultaneo
      paginaPrincipal.FiltroMemoriaInt128GB().click() // selecciono el segundo filtro que es el de la memoria del dispositivo 
      paginaPrincipal.TotalDeProducMostrados().should ('contain','12') // valido la cantidad de equipos que la pagina dice que se muestran con los filtros ya aplicados 
      //además validaria que como dice la pagina, que hayan tambien 12 elementos
    }) 

    it('Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa ', function (){
      paginaPrincipal.ElegirProd().eq(2).click() // busco y selecciono el elemento nro 3
      producto.AnuncioCuotas().click() // presiono el boton de calcular cuotas
      producto.EscribirBanco().type('Credicoop') // filtro escribiendo el banco emisor, en este caso Credicoop
      producto.SelecBanco().contains('Credicoop').click({force: true}) // selecciono el Banco
      producto.EscribirTarj().type('Visa') //filtro escribiendo la tarjeta, en este caso Visa
      producto.SelecTarj().contains('Visa').click() //selecciono la tarjeta
      producto.BotonCalcCuot().click() //presiono el boton de calcular cuotas
      producto.TablaCuotas().should('not.contain','60 cuotas')//valido que no exista la opcion de pagar en 60 cuotas con la tarjeta Visa del Banco Credicoop
    })

      //CP004 - Validar que se muestre en el carrito el producto seleccionado - Equipo.A05- Seleccionar solo un producto - Validar que mi URL contenga ''cart''
      //Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tiendaonline.movistar.com.ar), luego realizar la busqueda del equipo equipo A05 e ingresar al mismo, anañadir al carrito, verificar que se refleje en la web y verificar que el producto que se muestra sea el A05.
      //Resultado esperado: 
      //- Que se pueda ingresar a la página indicada 
      //- Que el equipo seleccionado sea el A05 
      //- Que se muestre un mensaje que me confirme que he añadido el producto al carrito
      //- Que se muestre la cantidad de productos seleccionados en el carrito
      //- Que se muestre en el carrito el producto elegido.
      //- Que mi url contenga la palabra ''cart''

      
      it('Validar que se muestre en el carrito el producto seleccionado - Equipo.A05', function(){
        paginaPrincipal.ElegirEquipoA05 ().click()//selecciono el equipo A05 
        producto.BotonComprar().click()//presiono el boton de comprar para agregar al carrito
        producto.MensjExitoCarrito().should('contain','Añadiste')//verifico que se me muestre el mensaje de que se añadio el producto al carrito
        producto.NroProductCarrito().should('contain','1')//verifico que la cantidad de productos en el carrito sea igual a 1 
        producto.BotonCarrito().click()//hago click en el carrito para ver su contenido 
        carrito.ItemCarrito().should('contain','A05')//Verifico que el contenido del carrito sea el producto especificado, en este caso el A05
        cy.url().should('contain','cart')//valido que en la url este el carrito de compras
        
        

      })
      
    
})