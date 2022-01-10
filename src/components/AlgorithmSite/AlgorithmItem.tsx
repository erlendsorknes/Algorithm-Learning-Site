import { Box, Heading, Flex, Text, UnorderedList, ListItem, List } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  first: string
  second: string
  third: string
  color: string
}

export const AlgorithmItem = ({ title, first, second, third, color }: Props) => {
  const space = ' '

  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      textAlign="center"
      height="500px"
      width="400px"
      direction="column"
      bg={color}
      mt="50px"
      justifyContent="space-around"
    >
      <Heading size="2xl">{title}</Heading>
      <Link to={first.replace(space, '')}>
        <Text fontSize="30px" _hover={{ paddingBottom: '5px' }}>
          {first}
        </Text>
      </Link>
      <Link to={second.replace(space, '')}>
        <Text fontSize="30px" _hover={{ paddingBottom: '5px' }}>
          {second}
        </Text>
      </Link>
      <Link to={third.replace(space, '')}>
        <Text fontSize="30px" _hover={{ paddingBottom: '5px' }}>
          {third}
        </Text>
      </Link>
    </Flex>
  )
}
