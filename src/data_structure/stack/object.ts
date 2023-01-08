export class Stack<T> {
  items: T[]
  stack_size: number

  constructor() {
    this.items = []
    this.stack_size = 0
  }

  isEmpty(): boolean {
    return this.stack_size === 0
  }

  push(element: T): void {
    this.items.push(element)
    this.stack_size += 1
  }

  pop(): null | T {
    if (this.isEmpty()) {
      return null
    } else {
      this.stack_size -= 1
      const topVal = this.items[this.stack_size]
      console.log(
        `The top of the stack element ${topVal} was successfully deleted.`
      )
      return topVal
    }
  }

  peek(): null | T {
    if (this.isEmpty()) {
      return null
    } else {
      const topVal = this.items[this.stack_size]
      console.log(`The top of the stack element is ${topVal}.`)
      return this.items[this.items.length - 1]
    }
  }

  clear(): void {
    this.items = []
    this.stack_size = 0
  }

  size(): number {
    console.log(`The stack has ${this.stack_size} elements.`)
    return this.stack_size
  }

  display(): null | string {
    if (this.isEmpty()) {
      console.log("The stack is empty.")
      return null
    } else {
      let items = ``
      for (let i = 1; i < this.stack_size; i++) {
        items += `${this.items[i]} `
      }
      console.log(`The stack elements are [${items.trim()}]`)
      return items
    }
  }
}

const s: Stack<number> = new Stack<number>()
s.push(1)
s.push(4)
s.push(33)
s.push(43)
s.push(63)
s.pop()
s.peek()
// s.clear()
s.size()
s.display()