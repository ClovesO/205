<?php
include_once './partials/header.html';

// Recebe a operação via GET
$operacao = isset($_GET['operacao']) ? $_GET['operacao'] : 'calculadora';

switch ($operacao) {
    case 'soma':
        echo '<h1>Soma</h1>';
        break;
    case 'subtracao':
        echo '<h1>Subtração</h1>';
        break;
    case 'multiplicacao':
        echo '<h1>Multiplicação</h1>';
        break;
    case 'divisao':
        echo '<h1>Divisão</h1>';
        break;
    default:
        echo '<h1>Calculadora</h1>';
        break;
}
  

include_once './partials/footer.html';
?>