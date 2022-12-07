let array: number[] = [1, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13]

function InsertionSort(array: number[]): number[] {
  for (let index: number = 1; index < array.length; index++) {
    let i: number = index
    let temp: number = array[index]
    while (i > 0 && array[i - 1] > temp) {
      array[i] = array[i - 1]
      i--
    }
    array[i] = temp
  }
  return array
}

console.log("insertion sort:\n", InsertionSort(array))
