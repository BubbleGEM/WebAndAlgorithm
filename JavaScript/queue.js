class Queue {

  constructor() {
    this.count = 0
    // to trace the first element
    this.lowest_count = 0
    this.items = {}
  }

  isEmpty() {
    return this.count === 0
  }

  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    } else {
      const result = this.items[this.lowest_count]
      delete this.items[this.lowest_count]
      this.lowest_count++
      return result
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null
    } else {
      return this.items[this.lowest_count]
    }
  }

  clear() {
    this.count = 0
    this.lowest_count = 0
    this.items = {}
  }

  size() {
    return this.count - this.lowest_count
  }

  display() {
    for (let i = this.lowest_count; i < this.count; i++) {
      console.log(this.items[i])
    }
  }
}

const q = new Queue()
q.enqueue("1")
q.enqueue("Lover")
// q.dequeue()
q.display()