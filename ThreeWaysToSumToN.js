// Three Ways To Sum To N

// Using Loop
function SumToN_UsingLoop(n) {
  var sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i + 1;
  }
  return sum;
}

// Using the Formula for Sum of First Natural Numbers
function SumToN_UsingFormulaNaturalNumber(n) {
  return (sum = (n * (n + 1)) / 2);
}

// Using Recursion

function SumToN_UsingRecursion(n) {
  if (n === 0) return 0;
  return n + SumToN_UsingRecursion(n - 1);
}

//Test by run Log
console.log("Using Loop: " + SumToN_UsingLoop(5));
console.log(
  "Using the Formula for Sum of First Natural Numbers: " +
    SumToN_UsingFormulaNaturalNumber(5)
);
console.log("Using Recursion: " + SumToN_UsingRecursion(5));
