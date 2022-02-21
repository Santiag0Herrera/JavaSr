
let stock= [];
let numReferencia = stock.length;

$.ajax({
    url: "data/catalogo.json",
    dataType: "json",
    success: (respuesta) => {
        cargarProductos(respuesta);
    },
});

//FUNCIONES

function cargarProductos(respuesta){
    stock = respuesta;
    console.log(stock[0]);
    stock.forEach((producto, indice)=>{
        $("#lista").append(
            `<li class="articulos">
                <div class="card">
                    <img src="`+producto.imagen+`"alt="Artiuclos de decoracion minimalistas vitage" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" id="title">`+producto.nombre+`</h5>
                    <p class="card-text" id="textDesc">`+producto.descripcion+`.</p>
                    <h6 class="card-text" id="textPrecio">$`+producto.precio+`</h6>
                    <button class="btn btn-primary" id="btn-carrito-add" onClick="addCarrito(${indice})">Agregar al Carrito</button>
                    </div>
                </div>
            </li>`
        );
        
        localStorage.setItem("stock", JSON.stringify(stock));
    });
}

//FUNCIONES

$("#crearArticulo").click( function crearArticulo(){
    let nombrev = $("#nombreArticulo").val();
    let descripcionv = $("#descripcionArticulo").val();
    let preciov = $("#precioArticulo").val();
    let imagenv = $("#basic-url").val();
    numReferencia = numReferencia + 1;
    const Articulo = {
        id:             numReferencia,
        nombre:         nombrev,
        descripcion:    descripcionv,
        precio:         preciov,
        imagen:         imagenv};
    stock.push(Articulo);
    localStorage.setItem("artCreado", JSON.stringify(Articulo));
});

function leerLocal (){
    if(localStorage.getItem("artCreado")){
        stock.forEach((producto, indice)=>{
            $("#lista").append(
                `<li class="articulos">
                    <div class="card">
                        <img src="${producto.imagen}"alt="Artiuclos de decoracion minimalistas vitage" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title" id="title">${producto.nombre}</h5>
                        <p class="card-text" id="textDesc">${producto.descripcion}.</p>
                        <h6 class="card-text" id="textPrecio">$${producto.precio}</h6>
                        <a class="btn btn-primary" id="btn-carrito-add" onClick="addCarrito(${indice})"> Agregar al Carrito </a>
                        <a class="btn btn-primary" id="btn-stock-delete" onClick="deleteStock> Eliminar articulo </a>
                        </div>
                    </div>
                </li>`
            );
        });
    }
}   
leerLocal();



