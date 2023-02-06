function clase() {
    mensajeEscondido.classList.remove("textAreaMsnEncriptado")
    mensajeEscondido.classList.add("mensaje2")
}

let btnEncriptar = document.getElementById("btnEncriptar")
btnEncriptar.addEventListener("click", encriptar)

let btnDesencriptar = document.getElementById("btnDesencriptar")
btnDesencriptar.addEventListener("click", desencriptar)

let btnCopiar = document.getElementById("btn-copiar");
btnCopiar.addEventListener("click", copiar)

function desabilitarBtnDesencriptar() {
    btnDesencriptar.disabled = true;
}




function encriptar(e) {
    let mensajeIngresado = document.getElementById("mensajeIngresado");

    const nuevoStr = mensajeIngresado.value.replaceAll("a", "ai");
    const nuevoStr2 = nuevoStr.replaceAll("e", "enter");
    const nuevoStr3 = nuevoStr2.replaceAll("i", "imes");
    const nuevoStr4 = nuevoStr3.replaceAll("o", "ober");
    const nuevoStr5 = nuevoStr4.replaceAll("u", "ufat");

    mensajeEscondido.innerText = nuevoStr5;

    clase()
}


function desencriptar() {
    let mensajeIngresado = document.getElementById("mensajeIngresado");

    const nuevoStr = mensajeIngresado.value.replaceAll("ufat", "u");
    const nuevoStr2 = nuevoStr.replaceAll("ober", "o");
    const nuevoStr3 = nuevoStr2.replaceAll("imes", "i");
    const nuevoStr4 = nuevoStr3.replaceAll("enter", "e");
    const nuevoStr5 = nuevoStr4.replaceAll("ai", "a");

    mensajeEscondido.innerText = nuevoStr5;

    clase()
}

function copiar() {
    let codigoACopiar = document.getElementById("mensajeEscondido");
    let seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    let res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
    window.location.reload()
    alert("Pegue su texto copiado en el encriptador !")
}

