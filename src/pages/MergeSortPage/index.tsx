import { Box, Code, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import SortingAlgorithm from '../../components/SortingAlgorithm/SortingAlgorithm'
import { getNUnique } from '../../utils/Util'

export const index = () => {
  const [numbers, setNumbers] = useState<number[]>(getNUnique(40))

  return (
    <Flex alignItems={'center'} justifyContent="space-around" direction="column">
      <Heading size="3xl" mt="50px" mb="50px">
        Merge Sort
      </Heading>
      <Text mb="100px" width="80%">
        Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls
        itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two
        halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and
        merges the two sorted sub-arrays into one. See the following C implementation for details.
      </Text>
      <Heading mb="20px">Pseudocode</Heading>
      <ReactMarkdown>{`
      def mergeSort(arr):
    if len(arr) > 1:
  
         # Finding the mid of the array
        mid = len(arr)//2
  
        # Dividing the array elements
        L = arr[:mid]
  
        # into 2 halves
        R = arr[mid:]
  
        # Sorting the first half
        mergeSort(L)
  
        # Sorting the second half
        mergeSort(R)
  
        i = j = k = 0
  
        # Copy data to temp arrays L[] and R[]
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
  
        # Checking if any element was left
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
  
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
            `}</ReactMarkdown>

      <Heading mb="40px">Visualization of the Merge sort</Heading>

      <SortingAlgorithm numbers={numbers} setNumbers={setNumbers} />
    </Flex>
  )
}

export default index
