import React, { useEffect, useRef, useState } from 'react'
import { Select, Button, Slider, SliderFilledTrack, SliderTrack, SliderThumb } from '@chakra-ui/react'
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
import useResize from '../../utils/hooks/useResize'

const determineAnimator = (value: number, drawer: Drawer, numbers: number[]): AlgorithmAnimator | null => {
  if (!drawer) return null
  // set selection sort as default to avoid null type
  let animator: AlgorithmAnimator = new SelectionSortAnimator(drawer, new SelectionSortIterator(numbers))
  switch (value) {
    case 0:
      animator = new SelectionSortAnimator(drawer, new SelectionSortIterator(numbers))
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

interface Props {
  numbers: number[]
  setNumbers: (numbers: number[]) => void
}

const SortingAlgorithm = ({ numbers, setNumbers }: Props) => {
  const [sliderValue, setSliderValue] = useState<number>(1)
  const [selectValue, setSelectValue] = useState<number>(0)
  const [animator, setAnimator] = useState<AlgorithmAnimator | null>(null)
  const [drawer, setDrawer] = useState<Drawer | null>(null)
  const windowSize = useResize()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const algorithms = ['Selection Sort', 'Insertion Sort', 'Merge Sort']

  useEffect(() => {
    const canvas = canvasRef.current
    const c = canvas?.getContext('2d')

    if (!(canvas && c)) return

    setRes(canvas, c, window.innerWidth, 400)
    const drawer = new Drawer(canvas, c)
    const tempAnimator = new InsertionSortAnimator(drawer, new InsertionSortIterator(numbers))

    tempAnimator.draw()

    setAnimator(tempAnimator)
    setDrawer(drawer)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const c = canvas?.getContext('2d')

    if (!(canvas && c && windowSize.width)) return

    setRes(canvas, c, windowSize.width, 400)
    animator?.draw()
  }, [windowSize])

  useEffect(() => {
    animator?.changeAnimationDelay(100 / sliderValue)
  }, [sliderValue])

  const handleClickSort = () => {
    if (!drawer) return

    if (animator) {
      animator.stop()
    }

    const newAnimator = determineAnimator(selectValue, drawer, numbers)
    newAnimator?.animate(100)

    setAnimator(newAnimator)
  }

  const handleClickStop = () => {
    if (!drawer) return

    if (animator) {
      animator.stop()
    }
  }

  const handleClickReset = () => {
    handleClickStop()
    setNumbers(getNUnique(40))
    drawer?.clear()
    animator?.draw()
  }

  return (
    <>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={1}
        mix={1}
        max={10}
        step={0.1}
        value={sliderValue}
        onChange={val => setSliderValue(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Select value={selectValue} onChange={event => setSelectValue(Number(event.target.value))}>
        {algorithms.map((al, i) => (
          <option key={i} value={i}>
            {al}
          </option>
        ))}
      </Select>
      <Button onClick={handleClickSort}>Sort!</Button>
      <Button onClick={handleClickStop}>Stop</Button>
      <Button onClick={handleClickReset}>Reset</Button>
      <canvas ref={canvasRef} style={{}} />
    </>
  )
}
export default SortingAlgorithm
