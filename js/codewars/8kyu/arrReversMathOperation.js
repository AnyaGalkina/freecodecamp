function sumOfDifferences(arr) {
    let newArr = arr.reverse();
    
    if(arr.lenght<=1){
     return 0; 
    }
    return (newArr[0]-newArr[1])+(newArr[1]-newArr[2]);
  }


//   Your task is to sum the differences between consecutive pairs in the array in descending order.

// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

