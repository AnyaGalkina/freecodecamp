// integers between the input params


function between(a, b) {
    let arr = [];
    for (i=a; i<(b+1); i++) {
      arr.push(i)
    }
    return arr;
  }


//   Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// examples
// a = 1
// b = 4
// --> [1, 2, 3, 4]
