import React, { useEffect, useState } from 'react'
import { Box, Flex, Container, Select, Button } from '@chakra-ui/react'
import { setRes } from '../../utils/Canvas'
import { getNUnique } from '../../utils/Util'
import Drawer from '../../utils/Drawer'
import MergeSortIterator from '../../utils/algorithms/iterators/MergeSortIterator'
import MergeSortAnimator from '../../utils/algorithms/animators/MergeSortAnimator'
import InsertionSortAnimator from '../../utils/algorithms/animators/InsertionSortAnimator'
import InsertionSortIterator from '../../utils/algorithms/iterators/InsertionSortIterator'
import SelectionSortIterator from '../../utils/algorithms/iterators/SelectionSortIterator'
import SelectionSortAnimator from '../../utils/algorithms/animators/SelectionSortAnimator'
import AlgorithmAnimator from '../../utils/algorithms/animators/AlgorithmAnimator'

const Algorithms = () => {
  console.log('rendering')
  const [selectValue, setSelectValue] = useState<string>('Test')
  const [intervalInstance, setIntervalInstance] = useState<ReturnType<typeof setInterval> | null>(null)
  const [numbers, setNumbers] = useState<number[]>(getNUnique(40))
  const [drawer, setDrawer] = useState<Drawer | null>(null)

  useEffect(() => {
    const canvas = document.querySelector('canvas')
    console.log(canvas)
    const c = canvas?.getContext('2d')

    if (canvas && c) {
      setRes(canvas, c, 800, 800)
      setDrawer(new Drawer(canvas, c))
    }
  }, [])

  const handleClick = () => {
    if (intervalInstance != null) {
      clearInterval(intervalInstance)
      setIntervalInstance(null)
    }
    let i: any
    let a: AlgorithmAnimator | null = null
    if (drawer) {
      if (selectValue == 'Selection Sort') {
        console.log('seleciton sort')
        i = new SelectionSortIterator(numbers)
        a = new SelectionSortAnimator(drawer, i)
        const a1 = new SelectionSortAnimator(drawer, i)
        a1.animate(50)
      } else if (selectValue == 'Insertion Sort') {
        i = new InsertionSortIterator(numbers)
        a = new InsertionSortAnimator(drawer, i)
      } else if (selectValue == 'Merge Sort') {
        i = new MergeSortIterator(numbers)
        a = new MergeSortAnimator(drawer, i)
      }
    }
    if (a) a.draw()
  }

  return (
    <>
      <Select value={selectValue} onChange={event => setSelectValue(event.target.value)}>
        <option value={'Insertion Sort'}>Insertion Sort</option>
        <option value={'Selection Sort'}>Selection Sort</option>
        <option value={'Merge Sort'}>Merge Sort</option>
      </Select>
      <Button onClick={handleClick}>Sort!</Button>
      <canvas style={{ background: 'white' }} />
    </>
  )
}
export default Algorithms
