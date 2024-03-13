const fs = require('fs');

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error.message);
    return null;
  }
}

function createMatrix(text) {
  const matrix = [];
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    matrix.push(line.split('').slice(0, 2001)); // Adiciona apenas os primeiros 50 caracteres de cada linha
  }
  return matrix.slice(0, 2001); // Retorna apenas as primeiras 50 linhas
}

function main() {
  const filePath = './casos/casoG2000.txt';
  const text = readFile(filePath);
  if (text !== null) {
    const matrix = createMatrix(text);
    // Exemplo de impressão da matriz
    // for(i = 0; i <= 1000; i++){
    //   console.log(matrix[i][0]+ " : "+ i);
    // }
    // for (let i = 0; i < 1000; i++) {
    //     console.log(matrix[i].join(''));
    // }
    return matrix;
  }
}
matrizMontada = main();
module.exports = matrizMontada;