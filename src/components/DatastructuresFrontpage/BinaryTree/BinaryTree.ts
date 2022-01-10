interface INode {
  value: number
  left: INode | null
  right: INode | null
}

class BinaryTree {
  public root: INode | undefined

  createNewNode = (value: number): INode => {
    return {
      value,
      left: null,
      right: null,
    }
  }

  insert = (value: number) => {
    const currentNode = this.createNewNode(value)
    if (!this.root) {
      this.root = currentNode
    } else {
      this.insertIntoCurrentNode(currentNode)
    }
    return this
  }

  private insertIntoCurrentNode = (currentNode: INode) => {
    const { value } = currentNode
    const traverse = (node: INode) => {
      if (value > node.value) {
        if (!node.right) {
          node.right = currentNode
        } else traverse(node.right)
      } else if (value < node.value) {
        if (!node.left) {
          node.left = currentNode
        } else traverse(node.left)
      }
    }
    traverse(this.root as INode)
  }

  postOrder = (): number[] => {
    let result: number[]
    // eslint-disable-next-line prefer-const
    result = []
    const traverse = (node: INode) => {
      node.left && traverse(node.left)
      node.right && traverse(node.right)
      result.push(node.value)
    }
    this.root && traverse(this.root)
    return result
  }

  isEmpty = (): boolean => {
    return this.root != undefined
  }
}

export default BinaryTree
