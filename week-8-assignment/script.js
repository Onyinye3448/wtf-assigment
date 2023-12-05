// 1.	Create a function that checks if the input/parameter is an even number.

function checkNum(num) {
  num % 2 === 0
    ? console.log("Even Number")
    : console.log("Not an even number");
}

// 	2.	Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter

function printNum(n1, n2) {
  if (n1 < n2) {
    for (let i = n1; i <= n2; i++) {
      console.log(i);
    }
  } else if (n1 > n2) {
    for (let i = n1; i >= n2; i--) {
      console.log(i);
    }
  } else {
    console.log(n1);
    console.log(n2);
  }
}

// 	3.	Create a function that sum the values in-between two numbers.
function sum(a, b) {
  let total = 0;
  for (let i = a; i <= b; i++) {
    total += i;
  }
  return total;
}

sum(1, 10);
