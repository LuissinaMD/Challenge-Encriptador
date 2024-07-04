function cifrar() {
    var texto = document.getElementById('placeholder').value;
    if (!texto) {
        alert("Por favor, ingresa un texto para cifrar.");
        return;
    }
    var textoCifrado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    mostrarResultado(textoCifrado, 'Texto cifrado:');
}

function descifrar() {
    let texto = document.getElementById('placeholder').value;
    if (!texto) {
        alert("Por favor, ingresa un texto para descifrar.");
        return;
    }
    let textoDescifrado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    mostrarResultado(textoDescifrado, 'Texto descifrado:');
}

function mostrarResultado(texto, titulo) {
    document.getElementById('titulo-mensaje').innerText = titulo;
    document.getElementById('parrafo').innerText = texto;
    let img = document.querySelector('.container__extra__img');
    img.style.display = 'none';
    let resultado = document.getElementById('resultado');
    resultado.style.display = 'flex';
    resultado.style.flexDirection = 'column';
    resultado.style.justifyContent = 'center';
    resultado.style.alignItems = 'center';
    resultado.style.height = '100%';
    resultado.style.padding = '1rem';
}

function copiarTexto() {
    let texto = document.getElementById('parrafo').innerText;
    if (texto === 'Ingresa el texto que deseas cifrar o descifrar') {
        alert("No hay texto para copiar.");
        return;
    }
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado en el portapapeles.");
    }, function() {
        alert("Error al copiar el texto.");
    });
}
