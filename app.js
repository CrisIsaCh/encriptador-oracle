const encriptarB = document.getElementById("botonE");
const desencriptarB = document.getElementById("botonD");



const desaparecer = document.getElementById("section2-ihp");
const section2 = document.getElementById('section2');
var textarea = document.getElementById("miTextarea");
// console.log(section2);
// console.log(desaparecer);
// console.log(encriptarB);

//-------EVENTO CLICK ENCRIPTAR-------////
encriptarB.addEventListener('click', () => {

    try {
        validaciones();
        preparacion();
        const mensaje = document.getElementById('parrafo');
        const botonCopiar = document.getElementById('botonC');
        let mensajeArray = Array.from(textarea.value.trim());
        // console.log(mensajeArray);
        mensaje.textContent = encriptar(mensajeArray);
        botonCopiar.addEventListener('click', copiar)
    } catch (error) {
        // alert(error);
        toastr["warning"]("¡Debe ingresar texto!🤬", "¡Cuidado!")

        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }

    }
});
//--------------EVENTO CLICK DESENCRIPTAR----/
desencriptarB.addEventListener('click', () => {


    try {
        validaciones();
        preparacion();

        const mensaje = document.getElementById('parrafo');
        const botonCopiar = document.getElementById('botonC');
        let mensajeArray = Array.from(textarea.value.trim());
        // console.log(mensajeArray.length);
        // console.log(textarea.value.trim().length);
        mensaje.textContent = desencriptar(textarea.value.trim());

        botonCopiar.addEventListener('click', copiar);


    } catch (error) {
        // alert(error);
        toastr["warning"]("¡Debe ingresar texto!🤬", "¡Cuidado!")

        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }

    }


});

// --------------FUNCION ENCRIPTAR----------------//

function encriptar(array) {


    for (let i = 0; i < array.length; i++) {
        switch (true) {
            case array[i] == "a":
                array[i] = "ai";
                break;
            case array[i] == "e":
                array[i] = "enter";
                break;
            case array[i] == "i":
                array[i] = "imes";
                break;
            case array[i] == "o":
                array[i] = "ober";
                break;
            case array[i] == "u":
                array[i] = "ufat";
                break;
        }

    }
    // console.log(array);
    let desencriptado = array.join("");
    // console.log(desencriptado);
    return desencriptado;
}
//////////////---------------FUNCION DESENCRIPTAR---------//////

function desencriptar(array) {



    for (let i = 0; i < array.length; i++) {
        array = array.replace("ai", "a");
        array = array.replace("enter", "e");
        array = array.replace("imes", "i");
        array = array.replace("ober", "o");
        array = array.replace("ufat", "u");
    }


    return array;

}
//////-------------VALIDACIONES-------////////
function validaciones() {
    // console.log("entree");

    if (textarea.value.trim() == "") {
        throw "¡Debe ingresar texto!🤬"


    }
}

textarea.addEventListener('keypress', (e) => {
    // console.log(e.key);
    let tecla = e.key;

    // Permitir la tecla de espacio
    if (tecla === " " || tecla === "Spacebar") {
        return; // Permitir la pulsación de tecla de espacio
    }


    if (tecla === tecla.toUpperCase() || tecla === 'á' || tecla === 'é' || tecla === 'í' || tecla === 'ó' || tecla === 'ú') {
        e.preventDefault();
    }


})

///---------------OCULTAR IMAGEN Y CREAR BOTON Y PARRAFO-//
function preparacion() {
    section2.innerHTML = '';
    // console.log(section2);
    const contenedorMB = document.createElement('div');
    contenedorMB.id = 'contenedorMensajeBoton';

    // console.log("encriptar");
    desaparecer.style.display = "none";
    const mensaje = document.createElement('p');
    mensaje.id = "parrafo";
    const botonCopiar = document.createElement('h6');
    botonCopiar.id = 'botonC';
    botonCopiar.innerText = 'Copiar';

    contenedorMB.append(mensaje);
    contenedorMB.append(botonCopiar);
    section2.append(contenedorMB);

    // console.log(textarea.value);



}
///////--------------COPIAR----///////////

function copiar() {
    let mensaje = document.getElementById("parrafo")
    // console.log(mensaje.textContent);
    navigator.clipboard.writeText(mensaje.textContent); // Intenta escribir el texto en el portapapeles
    // alert("¡Texto copiado! 😁😀🎊🎉✨");
    toastr["success"]("😁😀🎊🎉✨😝", "¡Texto copiado!")

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

}