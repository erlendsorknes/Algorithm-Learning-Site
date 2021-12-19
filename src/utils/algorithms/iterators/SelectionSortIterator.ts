import AlgorithmIterator from './AlgorithmIterator'

export default class SelectionSortIterator implements AlgorithmIterator {
  numbers: number[]
  i = 0
  j = 0
  n: number
  min = 0

  constructor(numbers: number[]) {
    this.numbers = numbers
    this.n = numbers.length
  }

  isSorted(): boolean {
    return this.i == this.n - 2 && this.j == this.n - 1
  }

  iterate(): void {
    if (this.j == this.n - 1) {
      this.i += 1
      this.j = this.i + 1
      this.min = this.i
    } else {
      this.j += 1
    }

    if (this.numbers[this.j] < this.numbers[this.min]) {
      this.min = this.j
    }

    if (this.j == this.n - 1 && this.min != this.i) {
      // Swapping the elements
      const tmp = this.numbers[this.i]

      this.numbers[this.i] = this.numbers[this.min]
      this.numbers[this.min] = tmp
    }
  }

  logNumbers(): void {
    console.log(this.numbers)
  }
}
