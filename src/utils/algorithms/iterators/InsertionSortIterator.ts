import AlgorithmIterator from './AlgorithmIterator'

export default class InsertionSortIterator implements AlgorithmIterator {
  numbers: number[]
  i = 1
  j = 0
  n: number
  sorted = false

  constructor(numbers: number[]) {
    this.numbers = numbers
    this.n = numbers.length
  }

  iterate(): void {
    if (this.isSorted()) return

    const current = this.numbers[this.i]
    const temp = this.numbers[this.j]
    if (current < temp && this.j != 0) {
      this.j--
    } else if (this.j == 0) {
      this.numbers.splice(this.i, 1)
      this.numbers.splice(0, 0, current)
      this.i += 1
      this.j = this.i - 1
    } else {
      this.numbers.splice(this.i, 1)
      this.numbers.splice(this.j + 1, 0, current)
      this.i += 1
      this.j = this.i - 1
    }
    if (this.i == this.n) {
      this.sorted = true
    }
  }

  isSorted(): boolean {
    return this.sorted
  }

  logNumbers(): void {
    console.log(this.numbers)
  }
}
