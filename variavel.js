function gravarSeuNome(){
    var nomeDigitado = document.getElementById("campoNome").value;
    setarSeuNome(nomeDigitado);
}

function setarSeuNome(nome){
    document.getElementById("seuNome").innerHTML = nome;
}

function transformarBordaEmAzul(){
    document.getElementById("campoNome").style = "border:3px solid blue;";
}

function removeEstilo(){
    document.getElementById("campoNome").style = "";
}