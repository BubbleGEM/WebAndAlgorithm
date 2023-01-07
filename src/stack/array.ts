export class Stack<T> {
  items: T[]

  constructor() {
    this.items = []
  }

  isEmpty(): boolean {
    return this.items.length == 0
  }

  push(element: T): void {
    this.items.push(element)
  }

  popVal(): null | T {
    if (this.isEmpty()) {
      console.log("underflow")
      return null
    } else {
      const topVal = this.items[this.items.length - 1]
      console.log(
        `The top of the stack element ${topVal} was successfully deleted.`
      )
      this.items.pop()
      return topVal
    }
  }

  peek(): null | T {
    if (this.isEmpty()) {
      console.log("The stack is empty.")
      return null
    } else {
      const topVal = this.items[this.items.length - 1]
      console.log(`The top of the stack element is ${topVal}.`)
      return this.items[this.items.length - 1]
    }
  }

  clear(): void {
    for (let i = 0; i < this.items.length; i++) {
      this.items.pop()
    }
  }

  size(): number {
    console.log(`The stack has ${this.items.length} elements.`)
    return this.items.length
  }

  display(): null | string {
    if (this.isEmpty()) {
      console.log("The stack is empty.")
      return null
    } else {
      let items = `${this.items[0]}`
      for (let i = 1; i < this.items.length; i++) {
        items += `,${this.items[i]}`
      }
      console.log(`The stack elements are [${items}]`)
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
s.popVal()
s.peek()
s.clear()
s.size()
s.display()