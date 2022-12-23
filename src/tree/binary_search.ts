class TreeNode<T> {
  key: T | null
  left: TreeNode<T> | null
  right: TreeNode<T> | null

  constructor(key: T) {
    this.key = key
    this.left = null
    this.right = null
  }
}

export class BinarySearchTree<T> {
  root: TreeNode<T> | null

  constructor() {
    this.root = null
  }

  insert(key: T): void {
    if (this.root == null) {
      this.root = new TreeNode(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  // except root node
  insertNode(node: TreeNode<T>, key: T): void {
    if (node.key > key) {
      if (node.left == null) {
        node.left = new TreeNode<T>(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      this.insertNode(node.right, key)
    }
  }
}

let t: BinarySearchTree<any> = new BinarySearchTree<any>()
t.insert(1)
t.insert("L")
t.insert(false)
t.insert(9)
t.insert(6)
console.log(t)