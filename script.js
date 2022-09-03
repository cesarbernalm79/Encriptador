function encriptar(){
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();
    // i, es para que tome las letras minusculas y mayusculas
    // m, toma multiples lineas
    //g, toma toda la linea u oracion
    var textoEncriptado = texto.replace(/e/img, "enter");    
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober"); 
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("imgDer").style.display = 'none';
    document.getElementById("texto").style.display = 'none';
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("btnCopiar").style.display = 'show';
    document.getElementById("btnCopiar").style.display = 'inherit';
}

function desencriptar(){
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();
    
    // i, es para que tome las letras minusculas y mayusculas
    // m, toma multiples lineas
    //g, toma toda la linea u oracion
    var textoEncriptado = texto.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("imgDer").style.display = 'none';
    document.getElementById("texto").style.display = 'none';
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("btnCopiar").style.display = 'show';
    document.getElementById("btnCopiar").style.display = 'inherit';
}

    function copiar(){

        var contenido = document.getElementById("texto2");
        contenido.select();
        document.execCommand("copy");
}


    