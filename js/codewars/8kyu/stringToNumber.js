
const stringToNumber1 = function(str){
    let number = +str;
    return number;
  }

  var stringToNumber2 = function(str){
    return Number(str);
  }


  var stringToNumber = function(str){
    return parseInt(str, 10);
  }  

  // parseInt("015", 10);  //parseInt(015, 10); вернёт 15
  