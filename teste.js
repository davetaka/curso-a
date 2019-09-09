function equacaoSegundoGrau(){

    var resultadoDelta = delta();
    
}

function delta(a, b, c) {
    var quadradoDeB = fazerAoQuadrado(b);
    var metadeDoDelta = fazerMetadeDoDelta(a,c);
    var resultadoDoDelta = quadradoDeB - metadeDoDelta;
    alert(resultadoDoDelta);
    
    return resultadoDoDelta;
}

function fazerAoQuadrado(x) {
    return Math.pow(x, 2);
}

function fazerMetadeDoDelta(x, y) {
    return 4 * x * y;
}