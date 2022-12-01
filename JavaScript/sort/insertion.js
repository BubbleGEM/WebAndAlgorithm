let array = [1, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13]
// let array = [5, 4, 3, 2, 1]
let insertion_sort_counter = 0

function insertion_sort(array) {
  // three cycles !!!!
  for (let index = 1; index < array.length; index++) {
    for (let i = 0; i <= index; i++) {
      for (let j = 0; j < index; j++) {
        insertion_sort_counter++
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]]
        }
      }
    }
  }
  return array
}

console.log("insertion sort:\n", insertion_sort(array))
console.log(`The counter of insertion sort is ${insertion_sort_counter}`)
