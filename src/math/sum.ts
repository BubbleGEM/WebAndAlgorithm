/*
  // regular
  export function sum(n: number): number {
    let result: number = 0
    for (let i: number = 0; i <= n; i++) {
      result += i
    }
    return result
  }
*/

// recursion
export function sum(n: number): number {
  if (n >= 0) {
    return n += sum(n - 1)
  } else {
    return 0
  }
}

console.log(sum(10))