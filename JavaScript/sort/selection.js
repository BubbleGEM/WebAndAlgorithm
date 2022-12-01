let array = [1, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13]
// let array = [5, 4, 3, 2, 1]
let selection_sort_counter = 0

function selection(array) {
  const {length} = array
  for (let index = 0; index < length; index++) {
    // pointer to the first of the unsorted parts
    let min = array[index]
    let min_index = index
    // compare unsorted parts (i = index)
    for (let i = index; i < length; i++) {
      selection_sort_counter++
      if (array[i] <= min) {
        min = array[i]
        min_index = i
      }
    }
    // swap
    [array[index], array[min_index]] = [array[min_index], array[index]]
  }
  return array
}

console.log("selection sort:\n", selection(array))
console.log(`The counter of selection sort is ${selection_sort_counter}`)