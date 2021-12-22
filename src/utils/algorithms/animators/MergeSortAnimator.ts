import Drawer from '../../Drawer'
import MergeSortIterator from '../iterators/MergeSortIterator'
import AlgorithmAnimator from './AlgorithmAnimator'

export default class MergeSortAnimator implements AlgorithmAnimator {
  drawer: Drawer
  iterator: MergeSortIterator
  interval: ReturnType<typeof setInterval> | null = null

  constructor(drawer: Drawer, iterator: MergeSortIterator) {
    this.drawer = drawer
    this.iterator = iterator
  }

  draw() {
    this.drawer.clear()

    for (let i = 0; i < this.iterator.numbers.length; i++) {
      let color = 'black'
      if (i == this.iterator.j) color = 'red'
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
    this.draw()
  }

  animate(ms: number) {
    this.interval = setInterval(this.iterateInterval, ms)
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}
