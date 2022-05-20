// get a number and return string with length equal to that number with format "1010" 
// example size 6 should return :'101010'

function stringy(size) {
    let arr = [1];
    for (i=0; i<(size - 1); i++) {
    arr[i] === 1 ? arr.push(0) : arr.push(1) 
   }  
    return arr.join('');
  }