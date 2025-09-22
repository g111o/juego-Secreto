// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    nombreAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = nombreAmigos.join("<br>");
}

function sortearAmigo() {
    if (nombreAmigos.length === 0) {
        alert("La caja está vacía, agregue al menos un nombre.");
        return;
    }

    let indice = Math.floor(Math.random() * nombreAmigos.length);
    let ganador = nombreAmigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${ganador}.`;

}
