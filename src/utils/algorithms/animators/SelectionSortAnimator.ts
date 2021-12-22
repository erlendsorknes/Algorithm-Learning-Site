import Drawer from '../../Drawer'
import SelectionSortIterator from '../iterators/SelectionSortIterator'
import AlgorithmAnimator from './AlgorithmAnimator'

export default class SelectionSortAnimator implements AlgorithmAnimator {
  drawer: Drawer
  iterator: SelectionSortIterator
  interval: ReturnType<typeof setInterval> | null = null

  constructor(drawer: Drawer, iterator: SelectionSortIterator) {
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
    this.draw(this.iterator.j, this.iterator.min)
  }

  iterate = () => {
    if (this.iterator.isSorted()) {
      return this.draw()
    }
    this.iterator.iterate()
    this.draw(this.iterator.j, this.iterator.min)
  }

  animate(ms: number) {
    this.interval = setInterval(this.iterateInterval, ms)
  }

  stop() {
    console.log(this.interval)
    if (this.interval) {
      console.log('clearing interval')
      clearInterval(this.interval)
    }
  }
}
