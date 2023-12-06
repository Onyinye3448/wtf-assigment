// Factorial Function
function factorial(num) {
  if (num > 1) {
    let factNum = 1;
    for (let i = num; i >= 1; i--) {
      factNum *= i;
    }
    return factNum;
  } else {
    return `Please provide a number greater than 1 for factorial calculation`;
  }
}

const result = factorial(5);
console.log(result);
