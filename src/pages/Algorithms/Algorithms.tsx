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
  const [selectValue, setSelectValue] = useState<number>(0)
  const [numbers, setNumbers] = useState<number[]>(getNUnique(40))
  const [animator, setAnimator] = useState<AlgorithmAnimator | null>(null)
  const [drawer, setDrawer] = useState<Drawer | null>(null)

  useEffect(() => {
    const canvas = document.querySelector('canvas')
    const c = canvas?.getContext('2d')

    if (canvas && c) {
      setRes(canvas, c, window.innerWidth, 400)
      const drawer = new Drawer(canvas, c)
      const tempAnimator = new InsertionSortAnimator(drawer, new InsertionSortIterator(numbers))

      tempAnimator.draw()

      setAnimator(tempAnimator)
      setDrawer(drawer)
    }
  }, [])

  useEffect(() => {
    // stop animation if animating
    console.log(selectValue)
  }, [selectValue])

  const determineAnimator = (): AlgorithmAnimator | null => {
    if (!drawer) return null
    // set selection sort as default to avoid null type
    let animator: AlgorithmAnimator = new SelectionSortAnimator(drawer, new SelectionSortIterator(numbers))
    switch (selectValue) {
      case 0:
        break
      case 1:
        animator = new InsertionSortAnimator(drawer, new InsertionSortIterator(numbers))
        break
      case 2:
        animator = new MergeSortAnimator(drawer, new MergeSortIterator(numbers))
        break
    }
    return animator
  }

  const handleClick = () => {
    if (!drawer) return

    if (animator) {
      animator.stop()
    }

    const newAnimator = determineAnimator()
    newAnimator?.animate(100)

    setAnimator(newAnimator)
  }

  return (
    <>
      <Select value={selectValue} onChange={event => setSelectValue(Number(event.target.value))}>
        <option value={0}>Selection Sort</option>
        <option value={1}>Insertion Sort</option>
        <option value={2}>Merge Sort</option>
      </Select>
      <Button onClick={handleClick}>Sort!</Button>
      <canvas style={{ background: 'white' }} />
    </>
  )
}
export default Algorithms
