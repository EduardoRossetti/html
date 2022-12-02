function pegardados(){
    var numero1 = document.getElementsByName('numero1')[0].value;
    var numero2 = document.querySelector('.numero2').value;
    var operador = document.querySelector('#operador').value;
    var result = this.calcular(numero1, numero2, operador);
    document.querySelector('#resultado').innerHTML = result
}

function calcular(numero1, numero2, operador){
    var numero1 = parseInt(numero1);
    var numero2 = parseInt(numero2);

    if(operador == '+'){
        var resultado = numero1 + numero2;
    }
    if(operador == '-'){
        var resultado = numero1 - numero2;
    }
    if(operador == '/'){
        var resultado = numero1 / numero2;
    }
    if(operador == '*'){
        var resultado = numero1 * numero2;
    }
    return resultado;
}