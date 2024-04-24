function direita(){
    var elemento1 = document.getElementById('ordenado1');
    var elemento2 = document.getElementById('ordenado2');
    var elemento3 = document.getElementById('ordenado3');

    var conteudoElemento1 = elemento1.innerHTML;
    elemento1.innerHTML = elemento2.innerHTML;
    elemento2.innerHTML = elemento3.innerHTML;
    elemento3.innerHTML = conteudoElemento1;
}

function esquerda(){
    var elemento1 = document.getElementById('ordenado1');
    var elemento2 = document.getElementById('ordenado2');
    var elemento3 = document.getElementById('ordenado3');

    var conteudoElemento3 = elemento3.innerHTML;
    elemento3.innerHTML = elemento2.innerHTML;
    elemento2.innerHTML = elemento1.innerHTML;
    elemento1.innerHTML = conteudoElemento3;
}
