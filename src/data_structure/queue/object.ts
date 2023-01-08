class Queue<T> {
  front: number
  rear: number
  items: T[]

  constructor() {
    this.front = -1
    this.rear = -1
    this.items = []
  }

  isEmpty(): boolean {
    return this.front == this.rear
  }

  enqueue(element: T): void {
    this.front = 0
    this.rear += 1
    this.items[this.rear] = element
  }

  dequeue(): void {
    if (this.isEmpty()) {
      console.log("underflow")
    }
    this.front += 1
  }

  getFrontValue(): T | null {
    if (this.isEmpty()) {
      console.log("The queue is empty.")
      return null
    } else {
      console.log(`The front of the Queue element is ${this.items[this.front]}`)
      return this.items[this.front]
    }
  }

  getRearValue(): T | null {
    if (this.isEmpty()) {
      console.log("The queue is empty.")
      return null
    } else {
      console.log(`The rear of the Queue element is ${this.items[this.rear]}`)
      return this.items[this.rear]
    }
  }

  size(): number {
    if (this.isEmpty()) {
      console.log("The queue is empty.")
      return 0
    } else {
      console.log(`The queue has ${this.rear - this.front + 1} elements.`)
      return this.rear - this.front + 1
    }
  }

  clear(): void {
    this.front = -1
    this.rear = -1
    this.items = []
  }

  display(): void {
    if (this.isEmpty()) {
      console.log("The queue is empty.")
    } else {
      let items = ``
      for (let i = this.front; i <= this.rear; i++) {
        items += `${this.items[i]} `
      }
      console.log(`The queue elements are [${items.trim()}]`)
    }
  }
}

const q = new Queue<number>()
q.isEmpty()
q.enqueue(100)
q.enqueue(62)
q.enqueue(63)
q.enqueue(64)
q.enqueue(65)
q.dequeue()
q.dequeue()
q.getFrontValue()
q.getRearValue()
// q.clear()
q.size()
q.display()