let numero1 = 0;
let numero2 = 0;
let operacao = '';

const atribuirValor = (numero) => {
    if (numero1 == 0 && operacao == '') {
        numero1 = numero;
        document.getElementById('result').value = numero1;
    } else if (numero1 != 0 && operacao == '') {
        numero1 = `${numero1}${numero}`;
        numero1 = parseInt(numero1)
        document.getElementById('result').value = numero1;
    } else if (numero1 != 0 && numero2 == 0) {
        numero2 = numero;
        document.getElementById('result').value = numero2;
    } else if (numero1 != 0 && numero2 != 0 && operacao != '') {
        numero2 = `${numero2}${numero}`;
        numero2 = parseInt(numero2);
        document.getElementById('result').value = numero2;
    } else {
        numero1 = numero;
        document.getElementById('result').value = numero1;
        numero2 = 0;
    }
}

const atribuirOperacao = (oper) => {
    operacao = oper;
    document.getElementById('result').value = operacao;
}


const resultadoFinal = () => {
    if (operacao == '+') {
        document.getElementById('result').value = numero1 + numero2;
    } else if (operacao == '-') {
        document.getElementById('result').value = numero1 - numero2;
    } else if (operacao == '*') {
        document.getElementById('result').value = numero1 * numero2;
    } else if (operacao == '/') {
        document.getElementById('result').value = numero1 / numero2;
    }
    numero1 = 0;
    numero2 = 0;
    operacao = '';
}

// document.getElementById('.').addEventListener('click', atribuirOperacao);