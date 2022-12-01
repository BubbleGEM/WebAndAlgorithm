export function default_equals(a, b) {
  return a === b
}

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

export function default_compare(a, b) {
  if (a === b) {
    return Compare.EQUALS
  }
  return a > b ? Compare.BIGGER_THAN : Compare.LESS_THAN
}

export function swap(array, a, b) {
  // classic way
  // const temp = array[a]
  // array[a] = array[b]
  // array[b] = temp

  // ES2015
  [array[a], array[b]] = [array[b], array[a]]
}