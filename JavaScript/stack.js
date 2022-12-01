class Stack {

  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  pop() {
    if (this.isEmpty()) {
      return null
    } else {
      this.count--
      const result = this.items[this.count]
      delete this.items[this.count]
      return result
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null
    } else {
      console.log(this.items[this.count - 1])
      return this.items[this.count - 1]
    }
  }


  clear() {
    this.count = 0
    this.items = {}
  }


  display() {
    if (this.isEmpty()) {
      console.log(null)
    } else {
      for (let i = this.count - 1; i >= 0; i--) {
        console.log(this.items[i])
      }
    }
  }
}

const s = new Stack()
s.push("1")
s.push("Lover")
// s.clear()
// s.display()
// s.peek()
s.pop()
s.display()