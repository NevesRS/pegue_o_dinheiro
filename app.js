const matrizMontada = require('./construtor_matriz.js');

let matriz = matrizMontada;
let coordenadaInicio = 0;

function calculaInicio(){
    for (let i = 0; i < matriz.length; i++) {
        if(matriz[i][0] == '-'){
          coordenadaInicio = i;
        //   console.log("AQUI: "+ matriz[i][0]+":"+i )
        }
        // console.log(matrix[i].join(''));
    }
}

calculaInicio();

let fila = [];

let linha = coordenadaInicio+1;
linha--;
let coluna = 0;
let direcao = 'l';

let passos = 0;
let operacoesFuncaoEspecifica = 0;
let operacoesLoopPrincipal = 0;

let acumulador = 0;

function contaOperacaoFuncaoEspecifica() {
    operacoesFuncaoEspecifica++;
}

function contaOperacaoLoopPrincipal() {
    operacoesLoopPrincipal++;
}

function andaNorte() {
    linha--;
    passos++;
    contaOperacaoFuncaoEspecifica()
}

function andaSul() {
    linha++;
    passos++;
    contaOperacaoFuncaoEspecifica()
}

function andaLeste() {
    coluna++;
    passos++;
    contaOperacaoFuncaoEspecifica()
}

function andaOeste() {
    coluna--;
    passos++;
    contaOperacaoFuncaoEspecifica()
}

function ehNumero(nmr) {
    return !isNaN(nmr);
    contaOperacaoFuncaoEspecifica()
}

function passoNumero() {
    if (ehNumero(matriz[linha][coluna]) && direcao == 'l') {
        calculaValor(matriz[linha][coluna]);
        andaLeste();
        contaOperacaoFuncaoEspecifica()
    } else if (ehNumero(matriz[linha][coluna]) && direcao == 'o') {
        calculaValor(matriz[linha][coluna]);
        andaOeste();
        contaOperacaoFuncaoEspecifica()
    } else if (ehNumero(matriz[linha][coluna]) && direcao == 'n') {
        calculaValor(matriz[linha][coluna]);
        andaNorte();
        contaOperacaoFuncaoEspecifica()
    } else if (ehNumero(matriz[linha][coluna]) && direcao == 's') {
        calculaValor(matriz[linha][coluna]);
        andaSul();
        contaOperacaoFuncaoEspecifica()
    }

}

function passoRetoHorizontal() {
    if (matriz[linha][coluna] == '-' && direcao == 'n') {
        calculaValor(matriz[linha][coluna]);
        andaNorte();
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '-' && direcao == 's') {
        calculaValor(matriz[linha][coluna]);
        andaSul();
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '-' && direcao == 'l') {
        calculaValor(matriz[linha][coluna]);
        andaLeste();
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '-' && direcao == 'o') {
        calculaValor(matriz[linha][coluna]);
        andaOeste();
        contaOperacaoFuncaoEspecifica()
    }
}

function passoRetoVertical() {
    if (matriz[linha][coluna] == '|' && direcao == 'n') {
        calculaValor(matriz[linha][coluna]);
        andaNorte();
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '|' && direcao == 's') {
        calculaValor(matriz[linha][coluna]);
        andaSul();
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '|' && direcao == 'l') {
        calculaValor(matriz[linha][coluna]);
        andaLeste();
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '|' && direcao == 'o') {
        calculaValor(matriz[linha][coluna]);
        andaOeste();
        contaOperacaoFuncaoEspecifica()
    }
}

function passoCurvaEsquerda() {

    if (matriz[linha][coluna] == '/' && direcao == 'n') {
        calculaValor(matriz[linha][coluna]);
        andaLeste();
        direcao = 'l';
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '/' && direcao == 's') {
        calculaValor(matriz[linha][coluna]);
        andaOeste();
        direcao = 'o';
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '/' && direcao == 'l') {
        calculaValor(matriz[linha][coluna]);
        andaNorte();
        direcao = 'n';
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '/' && direcao == 'o') {
        calculaValor(matriz[linha][coluna]);
        andaSul();
        direcao = 's';
        contaOperacaoFuncaoEspecifica()
    }
}

function passoCurvaDireita() {
    if (matriz[linha][coluna] == '\\' && direcao == 'n') {
        calculaValor(matriz[linha][coluna]);
        andaOeste();
        direcao = 'o';
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '\\' && direcao == 's') {
        calculaValor(matriz[linha][coluna]);
        andaLeste();
        direcao = 'l';
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '\\' && direcao == 'l') {
        calculaValor(matriz[linha][coluna]);
        andaSul();
        direcao = 's';
        contaOperacaoFuncaoEspecifica()
    } else if (matriz[linha][coluna] == '\\' && direcao == 'o') {
        calculaValor(matriz[linha][coluna]);
        andaNorte();
        direcao = 'n';
        contaOperacaoFuncaoEspecifica()
    }
}

function calculaValor(valor) {
    if (ehNumero(valor)) {
        fila.push(parseInt(valor));
        // console.log(fila);
        contaOperacaoFuncaoEspecifica()
    } else {
        let tam = fila.length;
        // console.log(fila);
        if (tam > 0) {
            // console.log(fila);
            fila.forEach(v => {
                acumulador += v * (10 ** (tam - 1));
                //v*(10**(i-tam));
                tam--;
                contaOperacaoFuncaoEspecifica()
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
const startTime = Date.now();
while (matriz[linha][coluna] != '#') {
    passoNumero();
    passoCurvaDireita();
    passoCurvaEsquerda();
    passoRetoHorizontal();
    passoRetoVertical();
    contaOperacaoLoopPrincipal();
    // console.log("Caractere: " + (matriz[linha][coluna]) + " Direcao: " + direcao + " Acumulador:" + acumulador + " Passos: "+passos);
}
const endTime = Date.now();
const elapsedTime = endTime - startTime;
calculaValor();

console.log("Tempo decorrido (em milissegundos):", elapsedTime);
console.log("Operações Específicas", operacoesFuncaoEspecifica);
console.log("Operações Função principal", operacoesLoopPrincipal);
console.log("Valor recuperado: " + acumulador);
console.log("Operações: ", operacoesFuncaoEspecifica + operacoesLoopPrincipal);
