function sum(n: number): number {
  let result: number = 0
  for (let i: number = 0; i <= n; i++) {
    result += i
  }
  return result
}

console.log(sum(10))