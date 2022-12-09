/*
  // regular
  export function factorial(n: number): number {
    let result: number = 1
    for (let i: number = 1; i <= n; i++) {
      result *= i
    }
    return result
  }
*/

// recursion
export function factorial(n: number): number {
  if (n >= 1) {
    return n *= factorial(n - 1)
  } else {
    return 1
  }
}

console.log(factorial(5))