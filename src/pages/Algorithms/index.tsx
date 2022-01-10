import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { AlgorithmItem } from '../../components/AlgorithmSite/AlgorithmItem'
import Footer from '../../components/Footer'

export const index = () => {
  return (
    <Box height="800px">
      <Flex alignItems={'center'} direction="row" justifyContent="space-around" mt="100px">
        <AlgorithmItem
          title="Sorting"
          first="Merge sort"
          second="Insertion sort"
          third="Selection sort"
          color="tomato"
        />
        <AlgorithmItem title="Pathfinding" first="Dijkstra" second="something" third="Belmon-Ford" color="blue.500" />
        <AlgorithmItem
          title="Others"
          first="Dynamic programming"
          second="Greedy Algorithms "
          third="Max flow"
          color="red.500"
        />
      </Flex>
    </Box>
  )
}

export default index
