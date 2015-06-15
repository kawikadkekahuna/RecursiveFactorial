function recursiveFactorial(n){
  if(typeof(n) !== 'number'){
    throw new TypeError('INPUT MUST BE A NUMBER');
  }
  
  var factorial = n;
  //Base Case
  if(n === 1){
    return factorial;
  }else{
    return factorial * recursiveFactorial(--n);
  }
}

module.exports = {
  recursiveFactorial: recursiveFactorial
}