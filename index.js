

var newArr = [];

function genArr(col, rows, fill){
  for(var i=0; i<rows; i++){
    newArr[i] = [];

    for(var j=0; j<col; j++){
      newArr[i][j] = [fill];
    }
  }
  return newArr;

}
console.log(genArr(3,3,3));