import Drawer from '../../Drawer'
import InsertionSortIterator from '../iterators/InsertionSortIterator'
import AlgorithmAnimator from './AlgorithmAnimator'

export default class InsertionSortAnimator implements AlgorithmAnimator {
  drawer: Drawer
  iterator: InsertionSortIterator
  interval: ReturnType<typeof setInterval> | null = null

  constructor(drawer: Drawer, iterator: InsertionSortIterator) {
    this.drawer = drawer
    this.iterator = iterator
  }

  draw(active?: number, min?: number) {
    this.drawer.clear()

    for (let i = 0; i < this.iterator.numbers.length; i++) {
      let color = 'black'
      if (min && i == min) {
        color = 'yellow'
      } else if (active && i == active) {
        color = 'red'
      }
      this.drawer.drawDynamicRect(
        this.drawer.getHeight(),
        -this.iterator.numbers[i] * 5,
        color,
        this.iterator.numbers[i],
        i,
        this.iterator.numbers.length
      )
    }
  }

  iterateInterval = () => {
    if (this.iterator.isSorted()) {
      this.draw()
      if (this.interval) clearInterval(this.interval)

      return
    }
    this.iterator.iterate()
    this.draw(this.iterator.i, this.iterator.j)
  }

  iterate = () => {
    if (this.iterator.isSorted()) {
      return this.draw()
    }
    this.iterator.iterate()
    this.draw(this.iterator.i, this.iterator.j)
  }

  animate(ms: number) {
    this.interval = setInterval(this.iterateInterval, ms)
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  changeAnimationDelay(ms: number) {
    this.stop()
    this.animate(ms)
  }
}
