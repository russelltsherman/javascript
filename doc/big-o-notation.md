# introducing big o

Imagine we have multiple solution to the same problem

Big O notation gives up numeric performance grading scale for software execution

It's important to have a precise vocabulary to talk about how our code performs

Useful for discussing trade-offs between different approaches

When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications

Less important: it comes up in interviews!

## two solutions

Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i+= 1) {
    total += i;
  }
  return total;
```

these functions create identical output

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

## how can we determine which is better

we can add code to check execution time

```js
start = Time.now();
console.log(addUpTo(100));
end = Time.now();
console.log(`Time: ${(end - start) / 1000} seconds`);
```

## problem with time

Different machines will record different times
The same machine will record different times!
For fast algorithms, speed measurements may not be precise enough?

Rather than counting seconds, which are so variable...

Let's count the number of simple operations the computer has to perform!

## operations

a operation is the product of a lanugage operator (+-\*/=<><<<>>>)

this function has 3 simple operations, regardless of the size of n

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

this function has 5n+2 operations

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    total += i;
  }
  return total;
}
```

## Big O Defined

Big O Notation is a way to formalize fuzzy counting

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

We won't care about the details, only the trends

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n )
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

this function always has 3 operations, regardless of the size of n
it's big o notation would be `O(1)`

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

this function has 5n+2 operations
it's big o notation would be `O(n)`

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    total += i;
  }
  return total;
}
```

this function has 6n*6n operations
it's big o notation would be `O(n*n)`

```js
function printAllPairs(n) {
  for (var i = 0; i < n; i += 1) {
    for (var j = 0; j < n; j += 1) {
      console.log(i, j);
    }
  }
}
```

## Big O Shorthands

- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop
