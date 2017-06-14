
function sumFibs(num) {
  let fibNumbers = [0];
  
  for(let i = 1; num > fibNumbers[fibNumbers.length-1]; i++) {
    
    if(i <= 2) {
      fibNumbers.push(1)
    } else {
      fibNumbers.push(fibNumbers[fibNumbers.length-1] + fibNumbers[fibNumbers.length-2])
    }
    
    
  }
  
  let filtered = fibNumbers.filter(value => (value <= num) && (value % 2) !== 0);
  
  let count = filtered.reduce((a,b) => a+b);
  
  return count;
  
  
}

sumFibs(4);
