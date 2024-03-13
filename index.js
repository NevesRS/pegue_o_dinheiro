const matrizMontada = require('./teste2.js');

let matriz = matrizMontada;

let fila = [];

let linha = 1045;
let coluna = 0;
let direcao = 'l';

let passos = 0;

let acumulador = 0;

function andaNorte() {
    linha--;
    passos++;
}

function andaSul() {
    linha++;
    passos++;
}

function andaLeste() {
    coluna++;
    passos++;
}

function andaOeste() {
    coluna--;
    passos++;
}

function ehNumero(nmr) {
    return !isNaN(nmr);
}

function passoNumero() {
    if (ehNumero(matriz[linha][coluna]) && direcao == 'l') {
        calculaValor(matriz[linha][coluna]);
        andaLeste();
    } else if (ehNumero(matriz[linha][coluna]) && direcao == 'o') {
        calculaValor(matriz[linha][coluna]);
        andaOeste();
    } else if (ehNumero(matriz[linha][coluna]) && direcao == 'n') {
        calculaValor(matriz[linha][coluna]);
        andaNorte();
    } else if (ehNumero(matriz[linha][coluna]) && direcao == 's') {
        calculaValor(matriz[linha][coluna]);
        andaSul();
    }
}

function passoRetoHorizontal() {
    if (matriz[linha][coluna] == '-' && direcao == 'n') {
        calculaValor(matriz[linha][coluna]);
        andaNorte();
    } else if (matriz[linha][coluna] == '-' && direcao == 's') {
        calculaValor(matriz[linha][coluna]);
        andaSul();
    } else if (matriz[linha][coluna] == '-' && direcao == 'l') {
        calculaValor(matriz[linha][coluna]);
        andaLeste();
    } else if (matriz[linha][coluna] == '-' && direcao == 'o') {
        calculaValor(matriz[linha][coluna]);
        andaOeste();
    }
}

function passoRetoVertical() {
    if (matriz[linha][coluna] == '|' && direcao == 'n') {
        calculaValor(matriz[linha][coluna]);
        andaNorte();
    } else if (matriz[linha][coluna] == '|' && direcao == 's') {
        calculaValor(matriz[linha][coluna]);
        andaSul();
    } else if (matriz[linha][coluna] == '|' && direcao == 'l') {
        calculaValor(matriz[linha][coluna]);
        andaLeste();
    } else if (matriz[linha][coluna] == '|' && direcao == 'o') {
        calculaValor(matriz[linha][coluna]);
        andaOeste();
    }
}

function passoCurvaEsquerda() {

    if (matriz[linha][coluna] == '/' && direcao == 'n') {
        calculaValor(matriz[linha][coluna]);
        andaLeste();
        direcao = 'l';
    } else if (matriz[linha][coluna] == '/' && direcao == 's') {
        calculaValor(matriz[linha][coluna]);
        andaOeste();
        direcao = 'o';
    } else if (matriz[linha][coluna] == '/' && direcao == 'l') {
        calculaValor(matriz[linha][coluna]);
        andaNorte();
        direcao = 'n';
    } else if (matriz[linha][coluna] == '/' && direcao == 'o') {
        calculaValor(matriz[linha][coluna]);
        andaSul();
        direcao = 's';
    }
}

function passoCurvaDireita() {
    if (matriz[linha][coluna] == '\\' && direcao == 'n') {
        calculaValor(matriz[linha][coluna]);
        andaOeste();
        direcao = 'o';
    } else if (matriz[linha][coluna] == '\\' && direcao == 's') {
        calculaValor(matriz[linha][coluna]);
        andaLeste();
        direcao = 'l';
    } else if (matriz[linha][coluna] == '\\' && direcao == 'l') {
        calculaValor(matriz[linha][coluna]);
        andaSul();
        direcao = 's';
    } else if (matriz[linha][coluna] == '\\' && direcao == 'o') {
        calculaValor(matriz[linha][coluna]);
        andaNorte();
        direcao = 'n';
    }
}

function calculaValor(valor) {
    if (ehNumero(valor)) {
        fila.push(parseInt(valor));
        // console.log(fila);
    } else {
        let tam = fila.length;
        // console.log(fila);
        if (tam > 0) {
            // console.log(fila);
            fila.forEach(v => {
                acumulador += v * (10 ** (tam - 1));
                //v*(10**(i-tam));
                tam--;
            });
        }
        fila = [];
    }
    return acumulador;
}

// console.log("------> MAPA <------")
// for(i = 0; i< 1000; i++){
//     console.log(matriz[i][0]+" : "+ i);
// }

while (matriz[linha][coluna] != '#') {
    passoNumero();
    passoCurvaDireita();
    passoCurvaEsquerda();
    passoRetoHorizontal();
    passoRetoVertical();
    // console.log("Caractere: " + (matriz[linha][coluna]) + " Direcao: " + direcao + " Acumulador:" + acumulador + " Passos: "+passos);
}
calculaValor();
console.log("Valor recuperado R$"+acumulador+",00");


