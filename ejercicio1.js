function factorial(n) {
  if (n === 0 ) {
    return 1;
  }  
    let acc = 0;
    for (let i = 0; i < n; i++) {
      acc += factorial(n - 1);
    }
    return acc;
  
}

const resultado = factorial(5);
console.log(resultado); 