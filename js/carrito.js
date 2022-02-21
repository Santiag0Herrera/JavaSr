let carrito = [];
let total = 0;

console.log("mi"+carrito);
const addCarrito = (indiceDelArrayProducto) => {
    console.log(indiceDelArrayProducto);
    const indiceEncontrado = carrito.findIndex((elemento) => {
        console.log(elemento.id === stock[indiceDelArrayProducto].id);
    });
    if (indiceEncontrado === -1) {
        let productoAgregar = stock[indiceDelArrayProducto];
        productoAgregar.cantidad = 1;
        carrito.push(productoAgregar);
        leerCarrito();
    } else {
        carrito[indiceEncontrado].cantidad += 1;
        actualizarStorage(carrito);
        leerCarrito();
    }
};

function leerCarrito (){
    if (carrito.length > 0) {
        carrito.forEach((producto, indice) => {
            total = total + (producto.precio * producto.cantidad);
            $("#carritoSlidebar").append(`
            <div class="producto-carrito">
                    <li class="articulos">
                        <div class="card">
                            <img src="${producto.imagen}"alt="Artiuclos de decoracion minimalistas vitage" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title" id="title">${producto.nombre}</h5>
                                <p class="card-text" id="textDesc">${producto.descripcion}.</p>
                                <h6 class="card-text" id="textCantidad">Cantidad: ${producto.cantidad}</h6>
                                <h6 class="card-text" id="textPrecio">$${producto.precio}</h6>
                                <button class="btn btn-primary"  id="btn-carrito-add" onClick="removeProduct(${indice})">Quitar</button>
                            </div>
                        </div>
                    </li>
                </div>
            `);
        });
        $("#totalSeccion").append(`
            <div class="total-carrito">
                <div class= "total" id="ttal"> TOTAL $ ${total}</div>
                <a class= "btn btn-primary finalizar" id="finalizar"onClick="finalizarCompra()"> FINALIZAR COMPRA </a>
            </div>`);
    }else{
        $("#carritoSlidebar").append(`
        <h5 style="color:grey">UPS! No hay productos agregados a tu carrito.</h5>
        `);
    }
}
function removeProduct (indice) {
    carrito.splice(indice, 1);
    actualizarStorage(carrito);
    leerCarrito();
};

function actualizarStorage (carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    leerCarrito();
}

function finalizarCompra () {
    const total = $("#ttal")[0];
    $("#totalSeccion").append(`<div class="compra-finalizada"><p class="compra-parrafo"> YA CASI ES TUYA LA COMPRA, EL   ${total} </p></div>
    <div class="datos-cliente">
    <p class="datos-parrafo"> Complete el formulario con sus datos para coordinar la entrega</p>
    <a class= "btn  formulario" id="formulario" onClick="dibujarFormu()"> FORMULARIO </a>
    </div>`);
};
