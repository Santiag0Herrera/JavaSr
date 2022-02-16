
//VARIABLES
let carrito = [];
let total = 0;

//FUNCIONES
const addCarrito = (indiceDelArrayProducto) => {
    const indiceEncontrado = carrito.findIndex((elemento) => {
        return elemento.id === stock[indiceDelArrayProducto].id;
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
    let carritoContainer = document.getElementById("carritoSlidebar");

    const leerCarrito = () => {
    carritoContainer.innerHTML = "";
    if (carrito.length > 0) {
        carrito.forEach((producto, indice) => {
            total = total + (producto.precio * producto.cantidad);
            let carrito = document.createElement("div");
            carrito.className = "producto-carrito";
            carrito.innerHTML = 
                `<li class="articulos">
                    <div class="card">
                        <img src="${producto.imagen}"alt="Artiuclos de decoracion minimalistas vitage" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${producto.nombre}</h5>
                            <p class="card-text" id="textDesc">${producto.descripcion}.</p>
                            <h6 class="card-text" id="textCantidad">Cantidad: ${producto.cantidad}</h6>
                            <h6 class="card-text" id="textPrecio">$${producto.precio}</h6>
                            <a class="btn btn-primary"  id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</a>
                        </div>
                    </div>
                </li>`;
            carritoContainer.appendChild(carrito);
        });
        const totalContainer = document.createElement("div");
        totalContainer.className = "total-carrito";
        totalContainer.innerHTML = `
            <div class= "total"> TOTAL $ ${total}</div>
            <a class= "btn btn-primary finalizar" id="finalizar" onClick="finalizarCompra()"> FINALIZAR COMPRA </a>`;
        carritoContainer.appendChild(totalContainer);
    }
}

const removeProduct = (indice) => {
    carrito.splice(indice, 1);
    actualizarStorage(carrito);
    leerCarrito();
};

const actualizarStorage = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    leerCarrito();
}

const finalizarCompra = () => {
    const total = document.getElementsByClassName("total")[0].innerHTML;
    carritoContainer.innerHTML = "";
    const compraFinalizada = `<div class="compra-finalizada"><p class="compra-parrafo"> YA CASI ES TUYA LA COMPRA, EL   ${total} </p></div>
    <div class="datos-cliente">
    <p class="datos-parrafo"> Complete el formulario con sus datos para coordinar la entrega</p>
    <a class= "btn  formulario" id="formulario" onClick="dibujarFormu()"> FORMULARIO </a>
    </div>`;
    carritoContainer.innerHTML = compraFinalizada;
};