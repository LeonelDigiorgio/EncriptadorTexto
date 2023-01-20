let btnEncriptar = document.getElementById("btnEncriptar")
btnEncriptar.addEventListener("click", encriptar)


function encriptar() {
    let mensajeIngresado = document.getElementById("mensajeIngresado")
    let mensajeEscondido = document.getElementById("mensajeEscondido")
    let resultado;

    while (mensajeIngresado.value.includes("a")) {
        resultado = mensajeIngresado.value.replace("a", "ai")
        mensajeEscondido.innerText = resultado;

        mensajeEscondido.classList.remove("mensaje")
        mensajeEscondido.classList.add("mensaje2")
        console.console.log("Hola mundo");

    }
}

/* if (mensajeIngresado.value.includes("a")) {
    resultado = mensajeIngresado.value.replace("a", "ai")
    mensajeEscondido.innerText = resultado;

    mensajeEscondido.classList.remove("mensaje")
    mensajeEscondido.classList.add("mensaje2")
}
else if (mensajeIngresado.value.includes("e")) {
    resultado = mensajeIngresado.value.replace("e", "enter")
    mensajeEscondido.innerText = resultado;

    mensajeEscondido.classList.remove("mensaje")
    mensajeEscondido.classList.add("mensaje2")
}
else if (mensajeIngresado.value.includes("i")) {
    resultado = mensajeIngresado.value.replace("i", "imes")
    mensajeEscondido.innerText = resultado;

    mensajeEscondido.classList.remove("mensaje")
    mensajeEscondido.classList.add("mensaje2")
}
else if (mensajeIngresado.value.includes("o")) {
    resultado = mensajeIngresado.value.replace("o", "ober")
    mensajeEscondido.innerText = resultado;

    mensajeEscondido.classList.remove("mensaje")
    mensajeEscondido.classList.add("mensaje2")
}
else if (mensajeIngresado.value.includes("u")) {
    resultado = mensajeIngresado.value.replace("u", "ufat")
    mensajeEscondido.innerText = resultado;

    mensajeEscondido.classList.remove("mensaje")
    mensajeEscondido.classList.add("mensaje2")
} */





/* for (let i = 0; i < mensajeIngresado.value.length) {
     let resultado = mensajeIngresado; 
 
     if (mensajeIngresado.value.includes("a")) {
         resultado = mensajeIngresado.value.replace("a", "ai")
         mensajeEscondido.innerText = resultado;
 
         mensajeEscondido.classList.remove("mensaje")
         mensajeEscondido.classList.add("mensaje2")
     }
     else if (mensajeIngresado.value.includes("e")) {
         resultado = mensajeIngresado.value.replace("e", "enter")
         mensajeEscondido.innerText = resultado;
 
         mensajeEscondido.classList.remove("mensaje")
         mensajeEscondido.classList.add("mensaje2")
     }
     else if (mensajeIngresado.value.includes("i")) {
         resultado = mensajeIngresado.value.replace("i", "imes")
         mensajeEscondido.innerText = resultado;
 
         mensajeEscondido.classList.remove("mensaje")
         mensajeEscondido.classList.add("mensaje2")
     }
     else if (mensajeIngresado.value.includes("o")) {
         resultado = mensajeIngresado.value.replace("o", "ober")
         mensajeEscondido.innerText = resultado;
 
         mensajeEscondido.classList.remove("mensaje")
         mensajeEscondido.classList.add("mensaje2")
     }
     else if (mensajeIngresado.value.includes("u")) {
         resultado = mensajeIngresado.value.replace("u", "ufat")
         mensajeEscondido.innerText = resultado;
 
         mensajeEscondido.classList.remove("mensaje")
         mensajeEscondido.classList.add("mensaje2")
     }*/

