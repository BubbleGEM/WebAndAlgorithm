import {default_equals} from "./util.js"

class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}

class LinkedList {

  constructor(equals_fn = default_equals) {
    this.count = 0;
    this.head = undefined
    this.equals_fn = equals_fn
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  push(element) {
    const node = new Node(element)
    let current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      // to get the last item
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  get_element_at(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head
      for (let i = 0; i <= index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  insert(element, index) {
    if (index > 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        node.next = this.head
        this.head = node
      } else {
        /**/
      }
    }

    this.count++
  }

  remove(element) {
  }

  index_of(element) {
  }

  remove_at() {
  }

  display() {
  }

}