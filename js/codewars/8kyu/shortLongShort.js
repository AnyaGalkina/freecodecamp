function solution(a, b){ 
    let  strA = Number(a); 
    let  strB = Number(b); 
    let  result;
    if (typeof strA === typeof 1 && typeof strB === typeof 1) {
      strA > strB ? result =  b + a + b :  result = a + b + a;  
    }else{
      a.length > b.length ? result = b + a + b : result =  a + b + a;
    }
      return result;
      console.log('a' +  typeof strA);
  } 
  let a = "Soon"; 
  let b = "Me"; 
  solution(a, b);