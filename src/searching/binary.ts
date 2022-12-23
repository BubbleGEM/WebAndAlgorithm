const start = performance.now()

import {quickSort} from "../sorting/quick"

export function binarySearch(array: number[], value: number): number {
  const sortedArray: number[] = quickSort(array)

  return -1
}

const end = performance.now()
const runTime = end - start
console.log(`Execution time: ${runTime.toFixed(2)} ms`)
// @ts-ignore
import * as process from 'process'

const used = process.memoryUsage().heapUsed / 1024 / 1024
console.log(`Memory consumption: ${used.toFixed(2)} MB`)
console.log("Language: TypeScript")
console.log(`Submission time: ${Date().toString()}`)