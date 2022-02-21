
//CONSTRUIR SECCIONES

//PAGINA INV
$("#topInv").append(`
<nav class="navbar navbar-light" style="background-color: #b99d9a;">
    <div class="container-fluid">
        <a class="navbar-brand" href="inicio.html"><h1>Milema</h1></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="./carrito.html">Carrito</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./nosotros.html">Sobre Nosotros</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`);

$("#fotoPrincipalIndexInv").append(`<div class="fotoInicial">
<div class="intro">
    <h2 class="animate__animated animate__rubberBand">¡Bienvenido a Mielma Home & Deco!</h2>
</div>
</div>`);

//PAGINA ADMIN
$("#topAdm").append(`
<nav class="navbar navbar-light" style="background-color: #b99d9a;">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html"><h1>Milema</h1></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="./carrito.html">Carrito</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./nosotros.html">Sobre Nosotros</a>
                <li class="nav-item">
                <a class="nav-link" href="./CrearArticulos.html">Crear Nuevos Articulos</a>
                </li>
                
            </ul>
        </div>
    </div>
</nav>`);

$("#fotoPrincipalIndexAdm").append(`<div class="fotoInicial">
<div class="intro">
    <h2 class="animate__animated animate__rubberBand">Bienvenido!</h2>
</div>
</div>`);

//HEADER PAGINAS RESTANTES
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
                    <a class="nav-link" href="./carrito.html">Carrito</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./nosotros.html">Sobre Nosotros</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`);

$("#fotoPrincipal").append(`<div class="fotoInicial">
<div class="intro">
    <h2 class="animate__animated animate__rubberBand">Tu Carrito de Compras</h2>
    <button type="button" class="btn-lg"><a href="index.html"><p> + Productos</p></a></button>
</div>
</div>`);