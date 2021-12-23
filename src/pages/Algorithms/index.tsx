import SortingAlgorithm from '../../components/SortingAlgorithm/SortingAlgorithm'
import { useState } from 'react'
import { getNUnique } from '../../utils/Util'

const index = () => {
  const [numbers, setNumbers] = useState<number[]>(getNUnique(40))

  return <SortingAlgorithm numbers={numbers} setNumbers={setNumbers} />
}

export default index
