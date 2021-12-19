import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  value: number
  key: number
}

export const Circle = ({ value }: Props) => {
  return (
    <Box background="white" borderRadius="50%" borderColor="black" borderWidth="5px" w="100px" h="100px">
      <Text mt="7px" fontSize="50px" fontWeight="10px">
        {value}
      </Text>
    </Box>
  )
}
