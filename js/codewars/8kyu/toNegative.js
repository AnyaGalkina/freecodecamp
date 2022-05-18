function makeNegative(num) {
    let result;
    num < 0 ? result = num : num > 0 ? result = -num  : result = 0; 
    return result;
  }

//   Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.