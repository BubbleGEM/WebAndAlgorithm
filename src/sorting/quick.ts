const start = performance.now()

type ICompareFunction<T> = (a: T, b: T) => number

function swap(array: any[], x: number, y: number): void {
  ;[array[x], array[y]] = [array[y], array[x]]
}

enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

function defaultCompare<T>(x: T, y: T): Compare {
  if (x === y) {
    return Compare.EQUALS
  } else {
    return x > y ? Compare.BIGGER_THAN : Compare.LESS_THAN
  }
}

function partition(
  array: any[],
  left: number,
  right: number,
  compareFn: ICompareFunction<any>
) {
  const pivot = array[Math.floor((right + left) / 2)]
  let i = left
  let j = right

  // console.log('pivot is ' + pivot + '; left is ' + left + '; right is ' + right);

  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++
      // console.log('i = ' + i);
    }

    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--
      // console.log('j = ' + j);
    }

    if (i <= j) {
      // console.log('swap ' + array[i] + ' with ' + array[j]);
      swap(array, i, j)
      i++
      j--
    }
  }

  return i
}

function quick(
  array: number[],
  left: number,
  right: number,
  compareFn: ICompareFunction<any>
) {
  let index

  if (array.length > 1) {
    index = partition(array, left, right, compareFn)

    if (left < index - 1) {
      quick(array, left, index - 1, compareFn)
    }

    if (index < right) {
      quick(array, index, right, compareFn)
    }
  }
  return array
}

// let array: number[] = [1, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13]
let array: number[] = [
  1, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8,
  3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6,
  5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13,
  1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13,
  4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7,
  6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9,
  8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6,
  6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1,
  13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5,
  13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3,
  7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5,
  9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1,
  6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4,
  1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6,
  5, 13, 4, 1, 13,
]

export function quickSort(
  array: number[],
  compareFn = defaultCompare
): number[] {
  return quick(array, 0, array.length - 1, compareFn)
}

console.log("quick sort:\n", quickSort(array))

const end = performance.now()
const runTime = end - start
console.log(`Execution time: ${runTime.toFixed(2)} ms`)
// @ts-ignore
import * as process from "process"

const used = process.memoryUsage().heapUsed / 1024 / 1024
console.log(`Memory consumption: ${used.toFixed(2)} MB`)
console.log("Language: TypeScript")
console.log(`Submission time: ${Date().toString()}`)
