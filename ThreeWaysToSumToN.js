// Three Ways To Sum To N

// Validate Input With Condition
function validateInput(n) {
  if (n < 0 || typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("Input must be a positive integer!");
  }

  if ((n * (n + 1)) / 2 > Number.MAX_SAFE_INTEGER) {
    throw new Error("Input too large!");
  }
}

// Using Loop
function SumToN_UsingLoop(n) {
  validateInput(n); // Validate input
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Using the Formula for Sum of First Natural Numbers
function SumToN_UsingFormulaNaturalNumber(n) {
  validateInput(n); // Validate input
  return (n * (n + 1)) / 2;
}

// Using Recursion
function SumToN_UsingRecursion(n) {
  validateInput(n); // Validate input
  if (n === 0) return 0;
  return n + SumToN_UsingRecursion(n - 1);
}

// Run Tests and Handle Errors Gracefully
function testSumToN(method, n) {
  try {
    console.log(`${method.name}: ${method(n)}`);
  } catch (error) {
    console.error(`${method.name}: ${error.message}`);
  }
}

// Test Cases
testSumToN(SumToN_UsingLoop, 5); // Valid input
testSumToN(SumToN_UsingFormulaNaturalNumber, 5); // Valid input
testSumToN(SumToN_UsingRecursion, 5); // Valid input
testSumToN(SumToN_UsingLoop, -3); // Invalid input (negative number)
testSumToN(SumToN_UsingFormulaNaturalNumber, 1e6); // Large input
