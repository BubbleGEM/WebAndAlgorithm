let array = [1, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13]
// let array = [5, 4, 3, 2, 1]
let bubble_sort_counter = 0

function bubble_sort(array) {
  // destructuring assignment
  const {length} = array
  // contrast n times
  for (let index = 0; index < length; index++) {
    // There's no need to contrast the orderly part.
    // i < array.length - 1 ( - index )
    for (let i = 0; i < length - 1; i++) {
      bubble_sort_counter++
      if (array[i] > array[i + 1]) {
        // swap - ES5
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
        // classic way
        // let temp = array[i]
        // array[i] = array[i + 1]
        // array[i + 1] = temp
      }
    }
  }
  return array
}

console.log("bubble sort: \n", bubble_sort(array))
console.log(`The counter of bubble sort is ${bubble_sort_counter}.`)