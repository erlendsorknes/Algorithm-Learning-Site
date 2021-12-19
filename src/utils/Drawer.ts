import Canvas from './Canvas'

export default class Drawer {
  canvas: HTMLCanvasElement
  c: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas
    this.c = context
  }

  clear() {
    this.c.clearRect(0, 0, this.canvas.getBoundingClientRect().width, this.canvas.getBoundingClientRect().height)
  }

  drawRect(x: number, y: number, w: number, h: number, color: string, value: number) {
    this.c.beginPath()
    this.c.fillStyle = color
    this.c.rect(x, y, w, h)
    this.c.fill()
    this.c.closePath()
    this.c.beginPath()
    this.c.fillStyle = 'white'
    this.c.fillText(String(value), x, y)
    this.c.closePath()
  }

  getWidth() {
    return this.canvas.getBoundingClientRect().width
  }

  getHeight() {
    return this.canvas.getBoundingClientRect().height
  }
}
