
let nombreUsuarioAdmin = "Admin";
let contraseñaUsuarioAdmin = "Admin";
let nombreUsuarioInvitado = "Inv";
let contraseñaUsuarioInvitado = "Inv";




$("#submitInicio").click(function IniciarSesion(){
    let nombreUsuario = document.getElementById("nombUsuario").value;
    let contraseñaUsuario = document.getElementById("validationCustom02").value;
    if (nombreUsuario !="" && contraseñaUsuario !=""){
        if(nombreUsuario === nombreUsuarioAdmin && contraseñaUsuario === contraseñaUsuarioAdmin){
            $("#append").append(`
            <div id="datosVerificados">
            <h4>Tus Datos son correctos!</h4>
            <a class="botonInicio" type="submit" id="submitInicio" href="./PPAdmin.html">Iniciar como Administrador</a>
            </div>`);
        }else if(nombreUsuario === nombreUsuarioInvitado && contraseñaUsuario === contraseñaUsuarioInvitado){
            $("#append").append(`
            <div id="datosVerificados">
            <h4>Tus Datos son correctos!</h4>
            <a class="botonInicio" type="submit" id="submitInicio" href="./index.html">Iniciar como Invitado</a>
            </div>`);
        }else{
            $("#append").append(`
            <div id="datosVerificadosIncorrectos">
            <h4>Los datos ingresados son Incorrectos...</h4>
            <a class="botonInicioIncorrecto" type="submit" id="submitInicio" href="./inicio.html">Intenta nuevamente</a>}
            </div>`);
        }
    }else{
        $("#append").append(`
            <div id="datosVerificadosIncorrectos">
            <h4>No se ingresaron datos a verificar.</h4>
            <a class="botonInicioIncorrecto" type="submit" id="submitInicio" href="./inicio.html">Intenta nuevamente</a></div>`);
    }
});


