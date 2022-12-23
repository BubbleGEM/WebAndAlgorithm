const start = performance.now()

export function sequentialSearch(array: number[], value: number): number {
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] === value) {
      console.log("This element exists in the array.")
      return i
    }
  }
  console.log("This element doesn\'t exist in the array.")
  return -1
}

let array: number[] = [1, 2, 3, 6, 9, 8, 0, 9, 11]
let value: number = 7
sequentialSearch(array, value)
console.log(sequentialSearch(array, value))


const end = performance.now()
const runTime = end - start
console.log(`Execution time: ${runTime.toFixed(2)} ms`)
// @ts-ignore
import * as process from 'process'

const used = process.memoryUsage().heapUsed / 1024 / 1024
console.log(`Memory consumption: ${used.toFixed(2)} MB`)
console.log("Language: TypeScript")
console.log(`Submission time: ${Date().toString()}`)