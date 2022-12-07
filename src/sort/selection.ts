let array: number[] = [1, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13]

function SelectionSort(array: number[]): number[] {
  for (let index: number = 0; index < array.length; index++) {
    let min_index: number = index
    for (let i: number = index; i < array.length; i++) {
      if (array[i] < array[min_index]) {
        min_index = i
      }
    }
    [array[index], array[min_index]] = [array[min_index], array[index]]
  }
  return array
}

console.log("selection sort:\n", SelectionSort(array))