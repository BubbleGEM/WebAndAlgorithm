export class Stack<T> {
  private count: number
  // ??
  // private items: object
  private items: any

  constructor() {
    this.count = 0
    this.items = {}
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  push(element: T) {
    this.items[this.count] = element
    this.count++
  }

  pop(): null | T {
    if (this.isEmpty()) {
      return null
    } else {
      this.count--
      const result = this.items[this.count]
      delete this.items[this.count]
      return result
    }
  }

  peek(): null | T {
    if (this.isEmpty()) {
      return null
    } else {
      return this.items[this.count - 1]
    }
  }

  clear() {
    /*
    this.count = 0
    this.items = {}
    */
    while (!this.isEmpty()) {
      this.pop()
    }
  }

  size(): number {
    return this.count
  }

  display(): null | object {
    if (this.isEmpty()) {
      return null
    } else {
      return this.items
    }
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    } else {
      let str: string = `${this.items[0]}`
      for (let i: number = 1; i < this.count; i++) {
        str += `, ${this.items[i]}`
      }
      return str
    }
  }
}

let s = new Stack()
s.push(1)
s.push(5)
s.push(3)
s.push(2)
s.push(4)
console.log(s.size())
console.log(s.display())
console.log(s.toString())