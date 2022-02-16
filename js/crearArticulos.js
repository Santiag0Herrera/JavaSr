
let stock= [];
let numReferencia = stock.length;

$.ajax({
    url: "/data/catalogo.json",
    dataType: "json",
    success: (respuesta) => {
        cargarProductos(respuesta);
    },
});

$("#top").append(`
<nav class="navbar navbar-light" style="background-color: #b99d9a;">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html"><h1>Milema</h1></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="">Page 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Page 2</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Page 3</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Page 4</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`);

$("#fotoPrincipal").append(`<div class="fotoInicial">
<div class="intro">
    <h2 class="animate__animated animate__rubberBand">Visita nuestro catalogo</h2>
    <button type="button" class="btn-lg" href="catalogo.html"><a href="catalogo.html"><p>CATALOGO</p></a></button>
</div>
</div>`);

//FUNCIONES

function cargarProductos(respuesta){
    stock = respuesta;
    stock.forEach((producto, indice)=>{
        $("#lista").append(
            `<li class="articulos">
                <div class="card">
                    <img src="`+producto.imagen+`"alt="Artiuclos de decoracion minimalistas vitage" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" id="title">`+producto.nombre+`</h5>
                    <p class="card-text" id="textDesc">`+producto.descripcion+`.</p>
                    <h6 class="card-text" id="textPrecio">$`+producto.precio+`</h6>
                    <a class="btn btn-primary" id="btn-carrito-add" onClick="addCarrito(${indice})"> Agregar al Carrito </a>
                    <a class="btn btn-primary" id="btn-carrito-delete"> Eliminar articulo </a>
                    </div>
                </div>
            </li>`
        );
        
        localStorage.setItem("stock", JSON.stringify(stock));
    });
}


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

//ANIMACIONES
$("#top").slideDown("slow");
$("#fotoPrincipal").slideDown("slow");
$("#formularioCreacion").fadeIn("slow");
$(".Titulo").fadeIn("slow");
