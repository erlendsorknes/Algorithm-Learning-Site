import React, { useEffect } from 'react'
import { Box, Flex, Container } from '@chakra-ui/react'
import { setRes } from '../../utils/Canvas'
import { getNUnique } from '../../utils/Util'
import Drawer from '../../utils/Drawer'
import MergeSortIterator from '../../utils/algorithms/iterators/MergeSortIterator'
import MergeSortAnimator from '../../utils/algorithms/animators/MergeSortAnimator'
import InsertionSortAnimator from '../../utils/algorithms/animators/InsertionSortAnimator'
import InsertionSortIterator from '../../utils/algorithms/iterators/InsertionSortIterator'
import SelectionSortIterator from '../../utils/algorithms/iterators/SelectionSortIterator'
import SelectionSortAnimator from '../../utils/algorithms/animators/SelectionSortAnimator'

type algorithmString = 'Selection Sort' | 'Insertion Sort' | 'Merge Sort'

function visualizeAlgorithm(algo: string, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  const d = new Drawer(canvas, context)

  d.clear()

  const numbers = getNUnique(100)

  let i: any
  let a: any

  switch (algo) {
    case 'Selection Sort':
      i = new SelectionSortIterator(numbers)
      a = new SelectionSortAnimator(d, i)
      break
    case 'Insertion Sort':
      i = new InsertionSortIterator(numbers)
      a = new InsertionSortAnimator(d, i)
      break
    case 'Merge Sort':
      i = new MergeSortIterator(numbers)
      a = new MergeSortAnimator(d, i)
      break
  }

  a.draw()

  document.querySelector('button')?.addEventListener('click', () => a.animate(50))
}

const select = document.querySelector('select')
if (select) {
  select.add(new Option('Selection Sort', 'Selection Sort'))
  select.add(new Option('Insertion Sort', 'Insertion Sort'))
  select.add(new Option('Merge Sort', 'Merge Sort'))

  select.addEventListener('change', event => {
    visualizeAlgorithm(select.value)
  })
}

const Algorithms = () => {
  useEffect(() => {
    const canvas = document.querySelector('canvas')
    const c = canvas?.getContext('2d')
    if (canvas && c) setRes(canvas, c, 800, 800)
  }, [])

  return <canvas></canvas>
}
export default Algorithms
