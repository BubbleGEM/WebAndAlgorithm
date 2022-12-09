export class Stack<T> {
  items: any[]

  constructor() {
    this.items = []
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  push(element: T): void {
    this.items.push(element)
  }

  pop(): null | T {
    if (this.isEmpty()) {
      return null
    } else {
      const topVal = this.items[this.items.length - 1]
      console.log(`The top of the stack element ${topVal} was successfully deleted.`)
      return this.items.pop()
    }
  }

  peek(): null | T {
    if (this.isEmpty()) {
      return null
    } else {
      const topVal = this.items[this.items.length - 1]
      console.log(`The top of the stack element is ${topVal}.`)
      return this.items[this.items.length - 1]
    }
  }

  clear(): void {
    this.items = []
  }

  size(): number {
    console.log(`The stack has ${this.items.length} elements.`)
    return this.items.length
  }

  display(): null | any[] {
    if (this.isEmpty()) {
      return null
    } else {
      console.log(`The stack elements are [${this.items}]`)
      return this.items
    }
  }
}

let s: Stack<any> = new Stack<any>()
s.push(1)
s.push("2")
s.push(false)
s.push(4)
s.push(6)
s.pop()
s.peek()
s.size()
s.display()