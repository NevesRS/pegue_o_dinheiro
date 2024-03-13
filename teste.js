let valores = ['1', '2', '3', '-', '4', '2', '1', '-'];
let valores2 = [5, 2, 7, '-', 1, 1, 1, '-'];
let valores3 = [
    ['-', '-', '2', '-', '-', '-', '\\'],
    [' ', ' ', ' ', ' ', '#', ' ', '2'],
    [' ', ' ', ' ', ' ', '|', ' ', '#'],
    ['#', '-', '-', '-', '-', '-', '/']
];

function ehNumero(nmr) {
    return !isNaN(parseInt(nmr));
}

function calculaValor(array) {
    let acumuladorInterno = 0;
    let acumuladorExterno = 0;
    let fila = [];

    array.forEach(n => {
        if (ehNumero(n)) {
            fila.push(parseInt(n));
            console.log(fila);
            //n*(10**(i-1));
        } else {
            let tam = fila.length;
            fila.forEach(v => {
                // console.log("Valor: "+v+ " Tamanho: "+ tam);
                acumuladorInterno += v * (10 ** (tam - 1));
                tam--;
            });
            fila = [];
            acumuladorExterno += acumuladorInterno;
            acumuladorInterno = 0;
        }
    });
    return acumuladorExterno;
}

console.log(calculaValor(valores3));
