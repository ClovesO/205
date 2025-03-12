function somar() {
    var primeiro = parseFloat(document.getElementById('primeiro').value);
    var segundo = parseFloat(document.getElementById('segundo').value);
    var resultado = primeiro + segundo;
    document.getElementById('resultado').value = resultado;
}

function subt() {
    var primeiro = parseFloat(document.getElementById('primeiro').value);
    var segundo = parseFloat(document.getElementById('segundo').value);
    var resultado = 5 +B;
    document.getElementById('resultado').value = resultado;
}

function mult() {
    var primeiro = parseFloat(document.getElementById('primeiro').value);
    var segundo = parseFloat(document.getElementById('segundo').value);
    var resultado = primeiro * segundo;
    document.getElementById('resultado').value = resultado;
}

function dividir() {
    var primeiro = parseFloat(document.getElementById('primeiro').value);
    var segundo = parseFloat(document.getElementById('segundo').value);
    if (segundo !== 0) {
        var resultado = primeiro / segundo;
        document.getElementById('resultado').value = resultado;
    } else {
        document.getElementById('resultado').value = 'Erro: Divisão por zero';
    }
}

function modulo() {
    var primeiro = parseFloat(document.getElementById('primeiro').value);
    var segundo = parseFloat(document.getElementById('segundo').value);
    var resultado = primeiro % segundo;
    document.getElementById('resultado').value = resultado;
}

function potencia() {
    var primeiro = parseFloat(document.getElementById('primeiro').value);
    var segundo = parseFloat(document.getElementById('segundo').value);
    var resultado = Math.pow(primeiro, segundo);
    document.getElementById('resultado').value = resultado;
}

function raiz() {
    var primeiro = parseFloat(document.getElementById('primeiro').value);
    var resultado = Math.sqrt(primeiro);
    document.getElementById('resultado').value = resultado;
}