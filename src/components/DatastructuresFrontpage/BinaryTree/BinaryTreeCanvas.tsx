import React, { useEffect, useRef } from 'react'
import BinaryTree from './BinaryTree'

interface INode {
  value: number
  left: INode | null
  right: INode | null
}

interface CanvasProps {
  tree: BinaryTree
  width?: number
  height?: number
}

const Canvas = ({ height, width, tree, ...props }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let x: number = 200
  let y: number = 50

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      if (context) {
        if (tree.root) {
          context.fillText(tree.root.value.toString(), x, y)
          const traverse = (node: INode) => {
            node.left && traverse(node.left)
            node.right && traverse(node.right)
            context.fillText(node.value.toString(), 250, 100)
          }
        }
      }
    }
  })
  return <canvas ref={canvasRef} {...props} />
}

export default Canvas
