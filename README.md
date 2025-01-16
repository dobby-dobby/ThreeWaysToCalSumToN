Way 1: Using a for Loop
Advantages:
- Simple and Intuitive: Easy to understand for beginners and widely used in practice.
- Explicit Steps: Shows how summation works by iterating step-by-step.
Disadvantages:
- Performance (Time Complexity): 𝑂(𝑛) as the loop runs n times.
- Risk of Errors: Higher chances of off-by-one errors or bugs, like incorrect loop bounds (i <= n vs i < n).
- Inefficiency for Large: 𝑛: Iterating many times can slow down the program if n is very large.

Way 2: Using the Formula
- Advantages:
  - Fast (Constant Time): 𝑂(1) as it uses a mathematical formula and doesn't require iteration.
  - Resource Efficient: Doesn't consume additional memory or processing power for looping or recursion.
  - Error-Free: Direct formula avoids common pitfalls like off-by-one errors.
- Disadvantages:
  - Requires Knowledge of the Formula: Not immediately intuitive unless you're familiar with this specific summation formula.
  - Prone to Overflow: For very large 𝑛, the multiplication 𝑛 X (𝑛+1) can cause integer overflow in some programming languages.

Way 3: Using Recursion
Advantages:
- Elegant and Compact: Showcases the beauty of recursion and is often a favorite among programmers who like mathematical or functional programming approaches.
- Good for Conceptual Understanding: Helps in understanding how recursion works and solving similar problems recursively.
Disadvantages:
- Performance (Time Complexity): 𝑂(𝑛) as it requires 𝑛 recursive calls.
- Memory Usage (Space Complexity): 𝑂(𝑛) because each recursive call uses stack memory, leading to potential stack overflow for large n.
- Harder to Debug: Recursive code can be harder to debug for beginners due to multiple nested calls.
