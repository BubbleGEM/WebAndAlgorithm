const start = performance.now()

let array: number[] = [1, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13, 1, 6, 6, 5, 9, 8, 3, 7, 6, 5, 13, 4, 1, 13]
// let array = [5, 4, 3, 2, 1]
// let bubble_sort_counter: number = 0

function bubble_sort(array: number[]): number[] {
  // destructuring assignment
  const {length} = array
  // contrast n times
  for (let index: number = 0; index < length; index++) {
    // There's no need to contrast the orderly part.
    // i < array.length - 1 ( - index )
    for (let i: number = 0; i < length - 1; i++) {
      // bubble_sort_counter++
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

console.log("bubble sorting: \n", bubble_sort(array))
// console.log(`The counter of bubble sort is ${bubble_sort_counter}.`)

const end = performance.now()
const runTime = end - start
console.log(`Execution time: ${runTime.toFixed(2)} ms`)
// @ts-ignore
import * as process from 'process'

const used = process.memoryUsage().heapUsed / 1024 / 1024
console.log(`Memory consumption: ${used.toFixed(2)} MB`)
console.log("Language: TypeScript")
console.log(`Submission time: ${Date().toString()}`)