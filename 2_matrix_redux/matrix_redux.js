const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let matrixArray = [];
let matrixDim = 0;

function buildMatrix(num) {
  matrixDim = Number(num);
  const matrixLen = num * num;
  matrixArray = new Array(matrixLen);
  // store a sequence of values in the array equal to the index of the position
  for (let i = 0; i < matrixLen; i += 1) {
    matrixArray[i] = i;
  }
}

function flipMatrix(matrix) {
  // -- approach 1 --
  // make a new array that is a reversal of the first
  // then go back and change the values in the new array to their orignal values

  // var originalCopy = matrix.slice();
  // matrix.reverse();

  // for (var i = 1; i <= matrixDim; i++) {
  //   var pos = (matrixDim * i) - i;
  //   matrix[pos] = originalCopy[pos]
  // }
  // return matrix;

  // -- approach 2 --
  // as you are filling the new array, use logic to determine what value is copied for that pos

  const newMatrix = new Array(matrix.length);
  for (let i = 0; i < newMatrix.length; i += 1) {
    newMatrix[i] = matrix[(matrix.length - 1) - i];
    if (i % (matrixDim - 1) === 0) {
      if (i > 0 && i < matrix.length - 1) {
        newMatrix[i] = matrix[i];
      }
    }
  }
  return newMatrix;
}

function printMatrix(matrix) {
  let row = '';

  for (let i = 0; i < matrix.length; i += matrixDim) {
    for (let j = 0; j < matrixDim; j += 1) {
      row += `${matrix[i + j]}\t`;
    }
    console.log(' ');
    console.log(row);
    row = '';
  }

  console.log(' ');
  console.log('================================');
  console.log(' ');
}

rl.question('Enter a number: ', (num) => {
  buildMatrix(num);
  printMatrix(matrixArray);
  const newMatrix = flipMatrix(matrixArray);
  printMatrix(newMatrix);
  rl.close();
});
