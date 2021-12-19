//algorithm credits: https://www.techiedelight.com/iterative-merge-sort-algorithm-bottom-up/
import AlgorithmIterator from './AlgorithmIterator'

export default class MergeSortIterator implements AlgorithmIterator {
  numbers: number[]
  i = 1
  j = 0
  n: number
  sorted = false

  constructor(numbers: number[]) {
    this.numbers = numbers
    this.n = numbers.length
  }
  // Merge two sorted subarrays `A[from…mid]` and `A[mid+1…to]`
  merge(A: number[], temp: number[], from: number, mid: number, to: number) {
    let k = from
    let i = from
    let j = mid + 1

    // loop till no elements are left in the left and right runs
    while (i <= mid && j <= to) {
      if (A[i] < A[j]) {
        temp[k++] = A[i++]
      } else {
        temp[k++] = A[j++]
      }
    }

    // copy remaining elements
    while (i <= mid) {
      temp[k++] = A[i++]
    }

    /* no need to copy the second half (since the remaining items
   are already in their correct position in the temporary array) */

    // copy back to the original array to reflect sorted order
    for (i = from; i <= to; i++) {
      A[i] = temp[i]
    }
  }

  // Iteratively sort subarray `A[low…high]` using a temporary array
  iterate() {
    let low = 0
    let high = this.numbers.length - 1

    // sort array `numbers[]` using a temporary array `temp`
    let temp: number[] = [...this.numbers]

    // divide the array into blocks of size `i`
    // i = [1, 2, 4, 8, 16…]
    // for i = 1, j = 0, 2, 4, 6, 8 …
    // for i = 2, j = 0, 4, 8, 12 …
    // for i = 4, j = 0, 8, 16 …
    // …
    let from = this.j
    let mid = this.j + this.i - 1
    let to = Math.min(this.j + 2 * this.i - 1, high)

    this.merge(this.numbers, temp, from, mid, to)

    if (this.j < high) {
      this.j += 2 * this.i
    } else {
      if (this.i <= high - low) {
        this.i *= 2
        this.j = low
      } else {
        this.sorted = true
      }
    }
  }

  isSorted(): boolean {
    return this.sorted
  }
}
