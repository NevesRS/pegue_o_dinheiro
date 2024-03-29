const fs = require('fs');

const pathNumber = 2000;
const path = `./casos/casoG${pathNumber}.txt`;
let coordenadaInicio = 0;

function lerArquivo(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error.message);
    return null;
  }
}

function criarMatriz(text) {
  const matriz = [];
  const linha = text.split('\n');
  for (let i = 0; i < linha.length; i++) {
      matriz[i] = linha[i].split('');
  }
  return matriz;
}

function main() {
  const text = lerArquivo(path);
  if (text !== null) {
    const matrix = criarMatriz(text);
    // Exemplo de impressão da matriz
    // for(i = 0; i <= pathNumber; i++){
    //   console.log(matrix[i][0]+ " : "+ i);
    // }
    // for (let i = 0; i < pathNumber; i++) {
    //   if(matrix[i][0] == '-'){
    //     coordenadaInicio = i;
    //     console.log("AQUI: "+ matrix[i][0]+":"+i )
    //   }
    //   // console.log(matrix[i].join(''));
    // }
    return matrix;
  }
}
matrizMontada = main();
module.exports = coordenadaInicio;
module.exports = matrizMontada;