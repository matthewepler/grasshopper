const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var matrixArray = [];
var matrixDim = 0;

rl.question('Enter a number: ', (num) => {
  buildMatrix(num);
  printMatrix(matrixArray);
  var newMatrix = flipMatrix(matrixArray);
  printMatrix(newMatrix);
  rl.close();
});

function buildMatrix (num) {
  matrixDim = Number(num);
  var matrixLen = num * num;
  matrixArray = new Array(matrixLen)
  // store a sequence of values in the array equal to the index of the position
  for (var i = 0; i < matrixLen; i++) {
    matrixArray[i] = i;
  }
}

function flipMatrix (matrix) {
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
  
  var newMatrix = new Array(matrix.length);
  for (var i = 0; i < newMatrix.length; i++) {
    newMatrix[i] = matrix[(matrix.length -1) - i];
    if (i % (matrixDim -1) === 0) {
      if (i > 0 && i < matrix.length-1) {
        newMatrix[i] = matrix[i]
      }
    } 
  }
  return newMatrix;
  
}

function printMatrix (matrix) {
  var row = ''

  for (var i = 0; i < matrix.length; i += matrixDim) {
    for (var j = 0; j < matrixDim; j++) {
      row += matrix[i + j] + '\t';
    }
    console.log(' ')
    console.log(row)
    row = '';
  }

  console.log(' ')
  console.log('================================')
  console.log(' ')
}