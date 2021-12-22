export const setRes = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, width: number, height: number) => {
  // increase the actual size of our canvas
  canvas.width = width * devicePixelRatio
  canvas.height = (height || width) * devicePixelRatio

  // ensure all drawing operations are scaled
  context.scale(devicePixelRatio, devicePixelRatio)

  // scale everything down using CSS
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'
}

export default { optimizeRes: setRes }
